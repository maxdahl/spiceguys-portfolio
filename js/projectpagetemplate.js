// TURNING THE OVERLAY ON / OFF

function turnOnOverlay() {
    document.getElementById("overlayOverProjectViewPage").style.display = "block";    
}

function turnOffOverlay() {
    document.getElementById("overlayOverProjectViewPage").style.display = "none";
} 










// APPROACH #2  FOR SLIDER



// // Array with picture urls
let pictures = [
    "./img/photos/portraet/perla_malina/Perla-malina_shoot-283_tif_cropped.jpg",
    "./img/photos/concerts/caleborate/Caleborate_09_04_19025.jpg",
];

let numberOfCurrentImageForSlider = 0;



// Set img.src to url taken from array  (starting value)
document.getElementById('pictureInSliderGalleryProjectPage').src = pictures[numberOfCurrentImageForSlider];





// change image number by clicking / sliding
function slideRight() {
    if (numberOfCurrentImageForSlider < pictures.length - 1){
        numberOfCurrentImageForSlider++;    
        document.getElementById('pictureInSliderGalleryProjectPage').src = pictures[numberOfCurrentImageForSlider];
    }
}
function slideLeft() {
    if (numberOfCurrentImageForSlider > 0){
        numberOfCurrentImageForSlider--;
        document.getElementById('pictureInSliderGalleryProjectPage').src = pictures[numberOfCurrentImageForSlider];
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