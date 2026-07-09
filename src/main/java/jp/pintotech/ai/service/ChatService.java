package jp.pintotech.ai.service;

import java.util.List;

import org.springframework.stereotype.Service;

import jp.pintotech.ai.model.Message;
import jp.pintotech.ai.repository.MessageRepository;

@Service
public class ChatService {

    private final MessageRepository messageRepository;

    public ChatService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public void chat(String question) {

        // ユーザーの発言を保存
        Message userMessage = new Message("user", question);
        messageRepository.save(userMessage);

        // 仮のAI回答
        String answer = "AI接続前です。\nあなたの質問は「"
                + question
                + "」でした。";

        // OpenAI接続時はこちらに置き換え
        // String answer = chatClient.prompt(question).call().content();

        // AIの回答を保存
        Message aiMessage = new Message("assistant", answer);
        messageRepository.save(aiMessage);
    }

    public List<Message> getMessages() {
        return messageRepository.findAll();
    }

}