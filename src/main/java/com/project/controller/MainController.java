package com.project.controller;


import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@AllArgsConstructor
public class MainController {

    @GetMapping(value = "/")
    public String main(){ return "main/main";}

    /*
    @GetMapping(value = "/")
    public String test(Model model) throws Exception {
        List<MemberVO> memberlist = service.test();
        model.addAttribute("memberlist", memberlist);
        return "/main/test";
    }*/
}
