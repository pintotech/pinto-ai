package jp.pintotech.ai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jp.pintotech.ai.service.ChatService;
import jp.pintotech.ai.service.ConversationService;

@Controller
public class HomeController {

	private final ChatService chatService;
	private final ConversationService conversationService;

	public HomeController(
			ChatService chatService,
			ConversationService conversationService) {

		this.chatService = chatService;
		this.conversationService = conversationService;

	}

	@GetMapping("/")
	public String home(Model model) {

		setModel(model);

		return "home";

	}

	@PostMapping("/")
	public String chat(@RequestParam String question, Model model) {

		chatService.chat(question);

		setModel(model);

		return "home";
	}

	/**
	 * 画面表示用のModelを設定
	 */
	private void setModel(Model model) {

		model.addAttribute(
				"messages",
				chatService.getMessages());

		model.addAttribute(
				"conversations",
				conversationService.getConversations());

	}

}