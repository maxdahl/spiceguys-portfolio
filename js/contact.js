const message =
  "Thank you for submitting your request. We will answering you soon.";

document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
