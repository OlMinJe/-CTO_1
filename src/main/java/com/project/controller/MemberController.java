package com.project.controller;


import com.project.service.BoardService;
import com.project.service.MemberService;
import com.project.vo.MemberVO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Random;

@Controller
@AllArgsConstructor
@RequiredArgsConstructor
public class MemberController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    MemberService memberService;

    //@Autowired
    //BoardService boardService;

    @GetMapping(value = "/")
    public String main(){ return "/main/main";}


    /** 회원가입 **/
    //닉네임 중복확인
    @ResponseBody
    @RequestMapping(value="/nickCheck", method= RequestMethod.POST)
    public int nickCheck(@RequestBody String mb_nick) throws Exception {

        logger.info("***********nickCheck");

        int count = 0;
        if(mb_nick != null) count = memberService.nickCheck(mb_nick);

        return count;
    }

    //id 중복 확인
    @ResponseBody
    @RequestMapping(value="/idCheck", method=RequestMethod.POST)
    public int IdCheck(@RequestBody String mb_id) throws Exception {

        logger.info("***********idCheck");

        int count = 0;
        if(mb_id != null) count = memberService.idCheck(mb_id);

        return count;
    }

    //회원가입 GET
    @RequestMapping(value="/register", method=RequestMethod.GET)
    public void registerGet() throws Exception {

        logger.info("********GET register");
        // void 타입일 경우 접근하는 URL 경로에 해당하는 jsp를 찾아 실행한다.
    }
    
    // 회원가입 시 프로필 이미지 저장
    @RequestMapping(value={"/register","/memberImg"}, method=RequestMethod.POST)
    public String memberRegister(MemberVO memberVO, MultipartFile file) throws Exception {
        //try 안에 구문이랑 충돌 되니까 이거 꼭 한 번만 쓰기
        //boardService.memberRegister(memberVO,file);

        logger.info("***********register POST");

        int count = memberService.idCheck(memberVO.getMb_id());
        System.out.println(count);

        try {
            if(count == 0) {
                BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                String encodePass = encoder.encode(memberVO.getMb_pw());
                memberVO.setMb_pw(encodePass);
                memberService.memberRegister(memberVO,file);
            }
        } catch (Exception e) {
            logger.info("*****존재 하는 아이디");
        }
        return "redirect:/";
    }

    //회원가입 시 이메일 인증
    @Autowired
    private JavaMailSender mailSender;

    //이메일 인증 관련
    @ResponseBody
    @RequestMapping(value = "/emailAuth", method={RequestMethod.GET, RequestMethod.POST})
    public String emailAuth(String email) {
        Random random = new Random();
        int checkNum = random.nextInt(888888) + 111111;

        /* 이메일 보내기 */
        String setFrom = "juliepark4253@gmail.com";
        String toMail = email;
        String title = "너나들이 홈페이지 이메일 인증번호 입니다.";
        String content =
                "너나들이에 회원가입 해주셔서 감사합니다." +
                        "<br><br>" +
                        "인증 번호는 " + checkNum + "입니다." +
                        "<br><br>" +
                        "해당 인증번호를 복사해서 인증번호 확인란에 기입하여 주세요." +
                        "감사합니다.";

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
            helper.setFrom(setFrom);
            helper.setTo(toMail);
            helper.setSubject(title);
            helper.setText(content,true);
            mailSender.send(message);
        }catch(Exception e) {
            e.printStackTrace();
        }
        return Integer.toString(checkNum);
    }


    /** 로그인 **/

    // 로그인 폼
    @RequestMapping(value="/login")
    public String memberLogin() throws Exception {
        return "/login/login";
    }

    // 로그인 기능
    @RequestMapping(value="/userCheck", method={RequestMethod.GET, RequestMethod.POST})
    public ModelAndView userCheck(@RequestParam(required = false) String code, MemberVO memberVO,
                                  HttpServletRequest req, RedirectAttributes redirect) throws Exception {

        ModelAndView mav = new ModelAndView();

        // 카카오로그인 및 일반로그인 처리
        if(code == null) { // 일반 로그인
            String inputPass = memberVO.getMb_pw(); // 입력한 비밀번호
            MemberVO member = memberService.userCheck(memberVO); // 암호화된 DB비밀번호

            if(member != null) {
                HttpSession session = req.getSession();
                BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

                if(encoder.matches(inputPass, member.getMb_pw())) { // 암호화비교, 성공한 경우
                    session.setAttribute("member", member);

                    //추가
                    if(member.getMb_id().equals("master")) {
                        redirect.addAttribute("stateCode", 0);
                        mav.setViewName("redirect:/");
                    } else {
                        redirect.addAttribute("stateCode", 1); // redirect하면서 code를 넣어주는 방법
                        mav.setViewName("redirect:/");
                    }

                } else { // 암호를 잘못 입력한 경우
                    mav.addObject("code", "matchesError");
                    mav.setViewName("userCheck");
                }
            } else { // 없는 아이디거나 빈공란
                mav.addObject("code", "nullError");
                mav.addObject("url", "login");
            }

        }
        return mav;
    }

    // 아이디 찾기 폼
    @RequestMapping(value = "/find_id_form")
    public String find_id_form() throws Exception{
        return "/login/find_id_form";
    }

    // 아이디 찾기
    @RequestMapping(value = "/find_id", method = RequestMethod.GET)
    public String find_id(HttpServletResponse response, @RequestParam("mb_email") String mb_email, Model md) throws Exception {
        md.addAttribute("id", memberService.find_id(response, mb_email));
        return "/login/find_id";
    }

    // 비밀번호 찾기 폼
    @RequestMapping(value = "/find_pw_form")
    public String find_pw_form() throws Exception{
        return "/login/find_pw_form";
    }

    // 비밀번호 찾기
    @RequestMapping(value = "/find_pw", method = RequestMethod.GET)
    public void find_pw(@ModelAttribute MemberVO memberVO, HttpServletResponse response) throws Exception{
        memberService.find_pw(response, memberVO);
    }





































}
