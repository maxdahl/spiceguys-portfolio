// listen to document load event
document.addEventListener("DOMContentLoaded", function () {
  // add class to text container in order to animate a smaller motion
  const isMobile = window.innerWidth < window.innerHeight;
  if (isMobile) document.querySelector(".content").className = "content";
  else {
    document.querySelector(".text-container").className += " smaller";

    // after 3 seconds
    setTimeout(() => {
      // hide the text-container
      document.querySelector(".text-container").className += " hidden";
      // display the content (removing 'hidden' class)
      document.querySelector(".content").className = "content";
      // hide pre-content
      document.querySelector(".pre-content").className += " hidden";
    }, 2000);

    setTimeout(() => {
      document.getElementById("pictureAde").style.display = "none";
    }, 2000);
  }
});
