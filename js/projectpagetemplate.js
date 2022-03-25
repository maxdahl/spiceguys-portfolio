//Heart Btn
function toggleLike() {
  if (document.getElementById("favourite").innerHTML === "favorite_border") {
    document.getElementById("favourite").innerHTML = "favorite";
  } else {
    document.getElementById("favourite").innerHTML = "favorite_border";
  }
}

// List of Pictures for the Grid
let gridImagesSrc = [
  "img/photos/portraet/marie/Marie_104.jpg",
  "img/photos/portraet/marie/Marie_077.jpg",
  "img/photos/portraet/marie/Marie_003.jpg",
  "img/photos/portraet/marie/Marie_033.jpg",
  "img/photos/portraet/marie/Marie_011.jpg",

  "img/photos/portraet/marie/Marie_006.jpg",
  "img/photos/portraet/marie/Marie_075.jpg",
  "img/photos/portraet/marie/Marie_072.jpg",
  "img/photos/portraet/marie/Marie_046.jpg",
  "img/photos/portraet/marie/Marie_108.jpg",
  // unused images
  //"img/photos/portraet/marie/Marie_104_cropped.jpg",
];

for (let i = 0; i < gridImagesSrc.length; i++) {
  document.querySelector(`.ppg-pic${i + 1} img`).src = gridImagesSrc[i];
}

// TURNING THE OVERLAY ON / OFF

function turnOnOverlay() {
  document.getElementById("overlayOverProjectViewPage").style.display = "flex";
}

function turnOffOverlay() {
  document.getElementById("overlayOverProjectViewPage").style.display = "none";
}

// APPROACH #2  FOR SLIDER

// // Array with picture urls
let pictures = [
  "img/photos/portraet/marie/Marie_104.jpg",
  "img/photos/portraet/marie/Marie_077.jpg",
  "img/photos/portraet/marie/Marie_003.jpg",
  "img/photos/portraet/marie/Marie_033.jpg",
  "img/photos/portraet/marie/Marie_011.jpg",

  "img/photos/portraet/marie/Marie_006.jpg",
  "img/photos/portraet/marie/Marie_075.jpg",
  "img/photos/portraet/marie/Marie_072.jpg",
  "img/photos/portraet/marie/Marie_046.jpg",
  "img/photos/portraet/marie/Marie_108.jpg",
  "img/photos/portraet/marie/Marie_104_cropped.jpg",
];

let numberOfCurrentImageForSlider = 0;

console.log(numberOfCurrentImageForSlider);

// Set img.src to url taken from array  (starting value)
document.getElementById("pictureInSliderGalleryProjectPage").src =
  pictures[numberOfCurrentImageForSlider];

// change image number by clicking / sliding
function slideRight() {
  if (numberOfCurrentImageForSlider < pictures.length - 1) {
    numberOfCurrentImageForSlider++;
    document.getElementById("pictureInSliderGalleryProjectPage").src =
      pictures[numberOfCurrentImageForSlider];
  }
}
function slideLeft() {
  if (numberOfCurrentImageForSlider > 0) {
    numberOfCurrentImageForSlider--;
    document.getElementById("pictureInSliderGalleryProjectPage").src =
      pictures[numberOfCurrentImageForSlider];
  }
}

// APPROACH #1  FOR SLIDER

// einfach eine div mit n Bildern

// all default to display: none

// JS: i = 0

// change i with the left - right arrow -buttons

// müsste mit DOM css properties verändern!!        ALTERNATIV: inline style attributes
// css :
// i-1th child -> display: none
// i-th-child -> display: block

// APPROACH #3  FOR SLIDER

// load all picture to Array

// change img element to another img element from Array

// BUT: why pre-load large images if user might not even want to view them?

// BOTTOM IMAGES

let bottomImages = [
  "img/photos/portraet/marie/Marie_033.jpg",
  "img/photos/portraet/marie/Marie_075.jpg",
  "img/photos/portraet/marie/Marie_072.jpg",
  "img/photos/portraet/marie/Marie_104_cropped.jpg",
];

let toAppend;

for (let i = 0; i < bottomImages.length; i++) {
  toAppend = document.createElement("img");
  toAppend.src = bottomImages[i];
  document
    .querySelector(".project-page-bottom-gallery-container")
    .appendChild(toAppend);
}
