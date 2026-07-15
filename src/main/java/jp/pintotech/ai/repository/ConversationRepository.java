package jp.pintotech.ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.pintotech.ai.model.Conversation;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {

}