package com.project.controller;

import com.project.service.BoardService;
import com.project.service.MemberService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class BoardController {

    //Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    MemberService memberService;

    @Autowired
    BoardService boardService;



}
