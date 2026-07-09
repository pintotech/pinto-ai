package jp.pintotech.ai.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.pintotech.ai.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}