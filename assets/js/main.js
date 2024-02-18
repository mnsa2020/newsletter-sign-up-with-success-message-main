const signUp = document.querySelector(".sign-up");
const message = document.querySelector(".message");
const subscribe = document.querySelector(".subscribe");
const dismiss = document.querySelector(".dismiss");

subscribe.addEventListener("click", () => {
  signUp.style.display = "none";
  message.style.display = "flex";
});

dismiss.addEventListener("click", () => {
  signUp.style.display = "flex";
  message.style.display = "none";
});
