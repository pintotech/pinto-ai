package jp.pintotech.ai.model;

import java.time.LocalDateTime;

public class Message {

	private String role;

	private String content;

	private LocalDateTime createdAt;

	public Message() {

	}

	public Message(String role, String content) {
		this.role = role;
		this.content = content;
		this.createdAt = LocalDateTime.now();
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

}