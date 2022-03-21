let lastGalleryPos = 1;
const galleries = document.querySelectorAll("[id*='gal-']");

for (let i = lastGalleryPos; i < galleries.length; i++) {
  galleries[i].classList.toggle("hidden");
}

function scrollGalleryVert(e) {
  e.preventDefault();

  const currentGallery = document.querySelectorAll(`#gal-${lastGalleryPos}`)[0];

  // scroll up
  if (e.deltaY < 0) {
    if (lastGalleryPos > 1) lastGalleryPos -= 1;
  } else {
    if (lastGalleryPos < galleries.length) lastGalleryPos += 1;
  }

  const gallery = document.querySelector(`#gal-${lastGalleryPos}`);

  currentGallery.classList.toggle("hidden");
  gallery.classList.toggle("hidden");
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

    scrollGalleryVert(e);
    return false;
  }
}

function scrollWithTouch(e) {
  if (touchDirection.swipeDirection.u) e.deltaY = -106;
  else e.deltaY = 106;

  scrollGalleryVert(e);
}

const touchDirection = {
  touchstart: { x: 0, y: 0 },
  touchmove: { x: 0, y: 0 },

  swipeDirection: { l: false, r: false, u: false, d: false },

  callback: scrollWithTouch,
  onTouch: (e) => {
    switch (e.type) {
      case "touchstart":
      case "touchmove":
        touchDirection[e.type].x = e.touches[0].pageX;
        touchDirection[e.type].y = e.touches[0].pageY;
        break;

      case "touchend":
        if (touchDirection.touchmove.y > touchDirection.touchstart.y) {
          touchDirection.swipeDirection.u = true;
          touchDirection.swipeDirection.d = false;
        } else {
          touchDirection.swipeDirection.u = false;
          touchDirection.swipeDirection.d = true;
        }

        if (touchDirection.touchmove.x > touchDirection.touchstart.x) {
          touchDirection.swipeDirection.l = true;
          touchDirection.swipeDirection.r = false;
        } else {
          touchDirection.swipeDirection.l = true;
          touchDirection.swipeDirection.r = false;
        }
    }

    touchDirection.callback(e);
  },
};

window.addEventListener("wheel", scrollGalleryVert, { passive: false });
window.addEventListener("touchstart", touchDirection.onTouch, {
  passive: false,
});
window.addEventListener("touchmove", touchDirection.onTouch, {
  passive: false,
});
window.addEventListener("touchend", touchDirection.onTouch, {
  passive: false,
});

window.onkeydown = scrollWithKey;
