package jp.pintotech.ai.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import jp.pintotech.ai.model.Message;

@Service
public class ChatService {

	private final List<Message> messages = new ArrayList<>();

	public void chat(String question) {

		// ユーザーの発言を追加
		messages.add(new Message("user", question));

		// 仮のAI回答
		String answer = "AI接続前です。\nあなたの質問は「" + question + "」でした。";

		//AI回答（OpenAI使用時）
		//String answer = chatClient.prompt(question).call().content();

		// AIの回答を追加
		messages.add(new Message("assistant", answer));
	}

	public List<Message> getMessages() {
		return messages;
	}

}