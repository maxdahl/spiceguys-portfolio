import activeElement from "./activeElement.js";
import touchHandler from "./touchHandler.js";

let targets = [];
let lastTargetNum = 1;
let scrollTargetSelector;
let isMobile = null;

function onWindowResize() {
  const mobileCheck = window.innerWidth < window.innerHeight;
  if (mobileCheck !== isMobile) {
    isMobile = mobileCheck;
    scrollTargetSelector = isMobile
      ? ".h-scrolltarget-mob"
      : ".h-scrolltarget-deskt";

    targets = document.querySelectorAll(scrollTargetSelector);
  }
}

function onActiveElementChange() {
  lastTargetNum = 1;
  for (let i = lastTargetNum; i < targets.length; i++) {
    targets[i].classList.toggle("hidden");
  }
}

onWindowResize();
onActiveElementChange(); //call it once on startup

activeElement.onChange = onActiveElementChange;
window.onresize = onWindowResize;

function scrollHorizontal(e) {
  e.preventDefault();

  const currentTarget = activeElement
    .getElement()
    .querySelector(`${scrollTargetSelector}.hst-${lastTargetNum}`);
  if (!currentTarget) return;

  // scroll left, deltaY is used by the mouse scroll wheel, thats why we use it
  if (e.deltaY < 0) {
    if (lastTargetNum > 1) lastTargetNum -= 1;
  } else {
    if (lastTargetNum < targets.length) lastTargetNum += 1;
  }

  const target = activeElement
    .getElement()
    .querySelector(`${scrollTargetSelector}.hst-${lastTargetNum}`);

  currentTarget.classList.toggle("hidden");
  target.classList.toggle("hidden");
}

function scrollLeft(e) {
  e.deltaY = -106;
  scrollHorizontal(e);
}

function scrollRight(e) {
  e.deltaX = 106;
  scrollHorizontal(e);
}

touchHandler.addEventHandler("left", scrollLeft);
touchHandler.addEventHandler("right", scrollRight);

const lftBtns = document.querySelectorAll(".scroll-left-button");
const rghtBtns = document.querySelectorAll(".scroll-right-button");

lftBtns.forEach((btn) => (btn.onclick = scrollLeft));
rghtBtns.forEach((btn) => (btn.onclick = scrollRight));
