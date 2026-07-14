package jp.pintotech.ai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.pintotech.ai.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
	
	List<Message> findAllByOrderByCreatedAtAsc();
	
}