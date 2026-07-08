package jp.pintotech.ai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jp.pintotech.ai.service.ChatService;

@Controller
public class HomeController {

	private final ChatService chatService;

	public HomeController(ChatService chatService) {
		this.chatService = chatService;
	}

	@GetMapping("/")
	public String home(Model model) {

		model.addAttribute("messages", chatService.getMessages());

		return "home";
	}

	@PostMapping("/")
	public String chat(@RequestParam("question") String question, Model model) {

		chatService.chat(question);

		model.addAttribute("messages", chatService.getMessages());

		return "home";
	}

}