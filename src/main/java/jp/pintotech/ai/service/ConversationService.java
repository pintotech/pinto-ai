package jp.pintotech.ai.service;

import java.util.List;

import org.springframework.stereotype.Service;

import jp.pintotech.ai.model.Conversation;
import jp.pintotech.ai.repository.ConversationRepository;

@Service
public class ConversationService {

	private final ConversationRepository conversationRepository;

	public ConversationService(ConversationRepository conversationRepository) {
		this.conversationRepository = conversationRepository;
	}

	/**
	 * 会話一覧を取得
	 */
	public List<Conversation> getConversations() {
		return conversationRepository.findAll();
	}

}