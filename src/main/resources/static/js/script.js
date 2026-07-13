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
        form.addEventListener("submit", (event) => {

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