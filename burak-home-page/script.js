// bind an event listener to the element
/*document.querySelector('#maximAdejumo a').addEventListener('click', function clickListener(event) {
    // prevent the default behaviour of the anchor ('a') to link to another page
    event.preventDefault();
    // move the element to the nav bar
    document.querySelector('#secondLocation').appendChild(this);
    // remove the current event listener from the element
    this.removeEventListener('click', clickListener);
    this.style.color = "black";
    this.style.textDecoration = "none"; 
    // remove the text decoration from the link text
    this.style.textAlign = "center";


})*/
/*$("#maximAdejumo").mouseenter(function() {
    const $maximAdejumo = $("#maximAdejumo");
    if ($maximAdejumo.data("active")) { return; }
    $maximAdejumo.show().data("active", true);
    setTimeout(function() {
        $maximAdejumo.hide().data("active", false);
    }, 10000);
});*/


// listen to document load event
window.onload = function(){
    // add class to text container in order to animate a smaller motion
    document.querySelector('.text-container').className += " smaller";

    // after 3 seconds
    setTimeout(() => {
        // hide the text-container
        document.querySelector('.text-container').className += " hidden";
        // display the nav (removing 'hidden' class)
        document.querySelector('nav').className = "";
        // signal the section that the animation is done so it cant take less height because the nav element is no longer hidden
        document.querySelector('section').className += " doneAnimation";
    }, 3000);
}

window.setTimeout("document.getElementById('pictureAde').style.display='none';", 3000)