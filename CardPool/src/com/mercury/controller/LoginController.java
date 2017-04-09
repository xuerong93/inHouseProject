package com.mercury.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
//	@RequestMapping("/main")
//	public String goMain() {
//		return "hello";
//	}
	@RequestMapping("/login")
	public String goLogin() {
		return "login";
	}
}
