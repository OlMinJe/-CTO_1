package com.project.service;

import com.project.domain.Role;
import com.project.mapper.MainMapper;
import com.project.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MemberService implements UserDetailsService {

    @Autowired
    MainMapper mapper;

    // 유저체크
    public MemberVO userCheck(MemberVO memberVO) throws Exception {
        return mapper.userCheck(memberVO);
    }


    // 아이디체크
    public int idCheck(String mb_id) throws Exception {
        return mapper.idCheck(mb_id);
    }

    //닉네임 중복 확인
    public int nickCheck(String mb_nick) throws Exception {
        return mapper.nickCheck(mb_nick);
    }

    // 회원가입(기존 코드에서 추가)
    public void memberRegister(MemberVO memberVO, MultipartFile file) throws Exception {
        //저장 경로 삭제 -> DB Table에만 저장됨
        //String imgPath=System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profile";
        UUID uuid = UUID.randomUUID();
        String mb_img = uuid + "_" + file.getOriginalFilename();
        File saveimgFile = new File(mb_img);
        file.transferTo(saveimgFile);
        memberVO.setMb_img(mb_img);
        mapper.memberRegister(memberVO);
    }

    //관리자 페이지 진입하기
    //@Override
    public UserDetails loadUserByUsername(String mb_id) throws UsernameNotFoundException {
        //로그인을 하기 위해 가입된 user 정보를 조회하는 매서드
        Optional<MemberVO> memberWrapper = null;
        try {
            memberWrapper = mapper.findByUsername(mb_id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        MemberVO member = memberWrapper.get();

        List<GrantedAuthority> authorities = new ArrayList<>();

        if(("master").equals(mb_id)) { //("master".equals(mb_id))
            authorities.add(new SimpleGrantedAuthority(Role.ADMIN.getValue()));
        }else {
            authorities.add(new SimpleGrantedAuthority(Role.MEMBER.getValue()));
        }
        return new User(member.getMb_id(), member.getMb_pw(),authorities);
    }
}
