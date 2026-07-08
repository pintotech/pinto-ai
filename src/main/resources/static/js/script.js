document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input[name='question']");
    const form = document.querySelector("form");

    input.focus();

    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            form.submit();
        }
    });
});