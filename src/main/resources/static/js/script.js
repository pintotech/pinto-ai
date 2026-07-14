document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input[name='question']");
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button");

    // 初期フォーカス
    if (input) {
        input.focus();
    }

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
    if (form) {
        form.addEventListener("submit", async (event) => {

            event.preventDefault();

            const question = input.value.trim();

            if (question === "") {
                event.preventDefault();
                input.focus();
                return;
            }

            // trim後の文字列をセット
            input.value = question;

            // 二重送信防止
            submitButton.disabled = true;
            submitButton.textContent = "送信中...";
			
			appendMessage("user", question);
			
			input.value = "";
			input.focus();

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question
                })
            });

            const data = await response.json();
			
			appendMessage("assistant", data.content);
			
			submitButton.disabled = false;
			submitButton.textContent = "送信";
			
			scrollToBottom();

            console.log(data);

        });
    }

    // 初回表示時に一番下へスクロール
    scrollToBottom();

});

/**
 * Enterキー送信用
 */
function submitForm() {

    const form = document.querySelector("form");

    if (form) {
        form.requestSubmit();
    }

}

/**
 * チャットを一番下までスクロールする
 */
function scrollToBottom() {

    const chat = document.querySelector(".chat");

    if (!chat) {
        return;
    }

    requestAnimationFrame(() => {

        chat.scrollTo({
            top: chat.scrollHeight,
            behavior: "smooth"
        });

    });

}

async function testApi() {

    console.log("① testApi開始");

    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: "テスト"
        })
    });

    console.log("② fetch完了");

    const data = await response.json();

    console.log("③ JSON取得");

    console.log(data);

}

/**
 * メッセージを画面へ追加
 */
function appendMessage(role, content) {

    const chat = document.getElementById("chat");

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