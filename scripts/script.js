// JavaScript Document

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

var icon = document.getElementById("icon");

const audio = new Audio ();

audio.src = "images/mario_fall.mp3";

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/sun.svg";
    } else {
        icon.src = "images/moon.svg";
    }
}

document.
    getElementById('carousel-btn-next')
    .addEventListener("click", function() {
        moveToNextSlide();
    }); 
document.
    getElementById('carousel-btn-prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    }); 

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item--visible');
        slide.classList.add('carousel-item--hidden');
    }

    slides[slidePosition].classList.add('carousel-item--visible');
}   

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }  
    updateSlidePosition();
}