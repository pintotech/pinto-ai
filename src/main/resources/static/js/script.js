document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const input = document.querySelector("input[name='question']");
    const chat = document.getElementById("chat");
    const submitButton = form.querySelector("button");

    // 初期フォーカス
    focusInput();

    // Enter送信
    if (input && form) {
        input.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                event.preventDefault();
                submitForm();
            }

        });
    }

    // ボタン送信
    setupSubmitEvent();
	
	// 新しいチャット
	setupNewChatButton();

    /**
     * Enterキー送信用
     */
    function submitForm() {

        form.requestSubmit();

    }

    /**
     * チャットを一番下までスクロールする
     */
    function scrollToBottom() {

        requestAnimationFrame(() => {

            chat.scrollTo({
                top: chat.scrollHeight,
                behavior: "smooth"
            });

        });

    }

    /**
     * AIへメッセージを送信
     */
    async function sendMessage(question) {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        return response.json();

    }

    /**
     * メッセージを画面へ追加
     */
    function appendMessage(role, content) {

        const message = document.createElement("div");

        message.className = `message ${role}`;

        const title = role === "user"
            ? "あなた"
            : "PINTO AI";

        message.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

        chat.appendChild(message);

    }

    function focusInput() {

        input.focus();

    }

    function setupSubmitEvent() {

        form.addEventListener("submit", async (event) => {

            event.preventDefault();

            const question = input.value.trim();

            if (question === "") {
                focusInput();
                return;
            }

            input.value = question;

            submitButton.disabled = true;
            submitButton.textContent = "送信中...";

            appendMessage("user", question);

            input.value = "";

            focusInput();

            try {

                const data = await sendMessage(question);

                appendMessage("assistant", data.content);

            } catch (error) {

                console.error(error);

                appendMessage(
                    "assistant",
                    "通信エラーが発生しました。時間をおいてもう一度お試しください。"
                );

            } finally {

                submitButton.disabled = false;
                submitButton.textContent = "送信";

            }

            scrollToBottom();

        });

    }
	
	/**
	 * 新しいチャット
	 */
	function setupNewChatButton() {

	    const button = document.getElementById("newChatButton");

	    button.addEventListener("click", () => {

	        chat.innerHTML = "";

	        focusInput();

	    });

	}
});