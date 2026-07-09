document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input[name='question']");
    const form = document.querySelector("form");

    // 初期フォーカス
    if (input) {
        input.focus();
    }

    // Enter送信
    if (input && form) {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                form.submit();
            }
        });
    }

    // 初回表示時に一番下へスクロール
    scrollToBottom();

});

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