import touchHandler from "./touchHandler.js";
import activeElement from "./activeElement.js";

let isScrolling = false;
let lastTargetNum = 1;
const targets = document.querySelectorAll(".v-scrolltarget");

activeElement.setElement(targets[0]);

for (let i = lastTargetNum; i < targets.length; i++) {
  targets[i].classList.toggle("hidden");
}

function scrollVert(e) {
  e.preventDefault();
  if (isScrolling) return false;

  isScrolling = true;
  const currentTarget = document.querySelector(`#vst-${lastTargetNum}`);
  if (!currentTarget) return;

  // scroll up, deltaY is used by the mouse scroll wheel, thats why we use it
  if (e.deltaY < 0) {
    if (lastTargetNum > 1) lastTargetNum -= 1;
  } else {
    if (lastTargetNum < targets.length) lastTargetNum += 1;
  }

  const target = document.querySelector(`#vst-${lastTargetNum}`);

  currentTarget.classList.toggle("hidden");
  target.classList.toggle("hidden");

  activeElement.setElement(target);
  setTimeout(() => (isScrolling = false), 300);
}

function scrollWithKey(e) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  //const moveKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  const moveKeys = { 33: 1, 38: 1, 34: 1, 40: 1 };

  if (moveKeys[e.keyCode]) {
    switch (e.keyCode) {
      case 33:
      case 38:
        e.deltaY = -106;
        break;
      case 34:
      case 40:
        e.deltaY = 106;
        break;
    }

    scrollVert(e);
    return false;
  }
}

touchHandler.addEventHandler("up", (e) => {
  e.deltaY = -106;
  scrollVert(e);
});

touchHandler.addEventHandler("down", (e) => {
  e.deltaX = 106;
  scrollVert(e);
});

document
  .querySelector("main")
  .addEventListener("wheel", scrollVert, { passive: false });
document.querySelector("main").onkeydown = scrollWithKey;
