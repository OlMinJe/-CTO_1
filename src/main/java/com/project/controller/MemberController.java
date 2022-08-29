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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.internet.MimeMessage;
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

    /*
    @GetMapping(value = "/")
    public String test(Model model) throws Exception {
        List<MemberVO> memberlist = service.test();
        model.addAttribute("memberlist", memberlist);
        return "/main/test";
    }*/

    //닉네임 중복확인
    @ResponseBody
    @RequestMapping(value="/nickCheck", method= RequestMethod.POST)
    public int nickCheck(@RequestBody String mb_nick) throws Exception {

        logger.info("***********nickCheck");

        int count = 0;
        if(mb_nick != null) count = memberService.nickCheck(mb_nick);

        return count;
    }

    /*
    @ResponseBody
    @RequestMapping(value="/idCheck", method=RequestMethod.GET)
    public int IdCheck(@RequestParam String mb_id) throws Exception {

        logger.info("***********idCheck");

        int count = 0;
        if(mb_id != null) count = memberService.idCheck(mb_id);

        return count;
    }*/

    @ResponseBody
    @RequestMapping(value="/idCheck", method=RequestMethod.POST)
    public int IdCheck(@RequestBody String mb_id) throws Exception {

        logger.info("***********idCheck");

        int count = 0;
        if(mb_id != null) count = memberService.idCheck(mb_id);

        return count;
    }


    /** register **/
    @RequestMapping(value="/register", method=RequestMethod.GET)
    public void registerGet() throws Exception {

        logger.info("********GET register");
        // void 타입일 경우 접근하는 URL 경로에 해당하는 jsp를 찾아 실행한다.
    }


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
        String setFrom = "wlals4253@naver.com";
        String toMail = email;
        String title = "회원가입 인증 이메일 입니다.";
        String content =
                "홈페이지를 방문해주셔서 감사합니다." +
                        "<br><br>" +
                        "인증 번호는 " + checkNum + "입니다." +
                        "<br>" +
                        "해당 인증번호를 인증번호 확인란에 기입하여 주세요.";

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




}
