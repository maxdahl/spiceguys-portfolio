document.querySelector("#action-btn").onclick = () => {
  const socialIcons = document.querySelector("#social-icons");
  socialIcons.querySelectorAll("img").forEach((img) => {
    img.classList.toggle("fadein");
    img.classList.toggle("fadeout");
  });
  socialIcons.classList.toggle("hidden");
};
