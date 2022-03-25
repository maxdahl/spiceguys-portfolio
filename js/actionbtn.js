let socialIconsOpen = false;
const actionBtn = document.querySelector("#action-btn");

actionBtn.onclick = (e) => {
  socialIconsOpen = !socialIconsOpen;

  if (socialIconsOpen) actionBtn.style.opacity = 1;
  else actionBtn.style.opacity = 0.5;

  const socialIcons = document.querySelector("#social-icons");
  socialIcons.classList.toggle("hidden");
};
