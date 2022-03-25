const llpButton = document.querySelector(".longlostbutton");
const llpGraphic = document.getElementById("llpimg");

llpButton.addEventListener("mouseover", function (event) {
  llpGraphic.style.top = "-80px";
  llpGraphic.style.transform = "rotate(45deg)";
});

llpButton.addEventListener("mouseout", function (event) {
  llpGraphic.style.top = "0px";
  llpGraphic.style.transform = "rotate(0deg)";
});
