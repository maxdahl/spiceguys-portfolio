

// listen to document load event
window.onload = function(){
    // add class to text container in order to animate a smaller motion
    document.querySelector('.text-container').className += " smaller";

    // after 3 seconds
    setTimeout(() => {
        // hide the text-container
        document.querySelector('.text-container').className += " hidden";
        // display the content (removing 'hidden' class)
        document.querySelector('.content').className = "content";
        // hide pre-content
        document.querySelector('.pre-content').className += " hidden";
    }, 2800);

    setTimeout(() => {
        document.getElementById('pictureAde').style.display='none';
    }, 2400);
}
