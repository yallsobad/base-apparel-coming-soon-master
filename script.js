const btn = document.querySelector(".button");
const emailValue = document.querySelector(".email").value;
const errorImg = document.querySelector(".error-image");
const errorMsg = document.querySelector(".error-message");
const email = document.querySelector(".email");
const emailFormat = /\w+@\w+.com/;

btn.addEventListener("click", () => {
  if (emailValue === "") {
    errorImg.style.display = "block";
    errorMsg.style.display = "block";
    email.style.border = "2px solid var(--Soft-Red)";
  }
});
