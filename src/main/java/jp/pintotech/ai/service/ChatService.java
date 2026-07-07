package jp.pintotech.ai.service;

import org.springframework.stereotype.Service;

@Service
public class ChatService {

	public String getAnswer(String question) {

		return "PINTO AIへの質問ありがとうございます。あなたの質問は「"
				+ question
				+ "」ですね。現在AI機能を開発中です。";

	}

}
