const emailElement = document.querySelector(".email");
const messageElement = document.querySelector(".message");
const submitElement = document.querySelector(".submit");

emailElement.querySelector(".placeholder").addEventListener("click", () => emailElement.firstElementChild.focus());
messageElement.querySelector(".placeholder").addEventListener("click", () => messageElement.firstElementChild.focus());

document.getElementById("input-email").addEventListener("focus", () => addActiveClass(emailElement));
document.getElementById("input-email").addEventListener("input", checkEmailInput);
document.getElementById("input-email").addEventListener("blur", () => checkInputOnBlur(emailElement));

document.getElementById("input-message").addEventListener("focus", () => addActiveClass(messageElement));
document.getElementById("input-message").addEventListener("input", checkMessageInput);
document.getElementById("input-message").addEventListener("blur", () => checkInputOnBlur(messageElement));

function checkInputOnBlur(element) {
    if (element.firstElementChild.value === "")
        removeActiveClass(element);
}

function checkEmailInput() {
    email = isEmailValid(this.value);
    checkButtonActivate();
}

function checkMessageInput() {
    message = this.value !== "";
    checkButtonActivate();
}

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkButtonActivate() {
    if (email && message) {
        addActiveClass(submitElement);
        submitElement.firstElementChild.disabled = false;
    }
    else {
        removeActiveClass(submitElement);
        submitElement.firstElementChild.disabled = true;
    }
}

let email = false;
let message = false;