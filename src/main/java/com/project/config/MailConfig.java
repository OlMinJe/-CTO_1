package com.project.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {
    @Bean
    public static JavaMailSender mailSender(){

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.naver.com");
        mailSender.setPort(465);
        mailSender.setUsername("wlals4253@naver.com");
        mailSender.setPassword("TD78KVYFV6G3");

        Properties props=mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol","smtp");
        props.put("mail.smtp.port", "465");
        props.put("mail.smtp.auth","true");
        props.put("mail.smtp.host", "smtp.naver.com");
        props.put("mail.smtp.starttls.enable","true");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.debug","true");
        props.put("mail.smtp.ssl.trust","smtp.naver.com");
        props.put("mail.smtps.ssl.checkserveridentity","true");
        props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.ssl.enable","true");
        props.put("mail.smtp.ssl.protocols","TLSv1.2");

        return mailSender;
    }

}
