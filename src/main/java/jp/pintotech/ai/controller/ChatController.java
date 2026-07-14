package jp.pintotech.ai.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jp.pintotech.ai.dto.ChatRequest;
import jp.pintotech.ai.dto.ChatResponse;
import jp.pintotech.ai.service.ChatService;

@RestController
public class ChatController {

	private final ChatService chatService;

	public ChatController(ChatService chatService) {
		this.chatService = chatService;
	}

	@PostMapping("/api/chat")
	public ChatResponse chat(@RequestBody ChatRequest request) {

		chatService.chat(request.question());

		return new ChatResponse(
				"assistant",
				"OK");
	}

}