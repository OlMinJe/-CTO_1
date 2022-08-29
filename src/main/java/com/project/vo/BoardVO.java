package com.project.vo;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class BoardVO {
	
	private String writer; 
	private int num;
	private String title;
	private String content;
	private Date regdate;

	//추가
	private String filepath;
	private String filename;
}
