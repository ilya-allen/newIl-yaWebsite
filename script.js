'use strict';

const homeButton = document.querySelector('.home_button');
const glassBox = document.querySelector('.glass_box');
const scrollBanner = document.querySelector('.scroll_banner')
const bannerText = document.querySelector('.banner_text');
const introPage = document.querySelector('.intro_page')
const introButton = document.querySelector('.intro_button')
const returnButton = document.querySelector('.return_button');
const socialsButton = document.querySelector('.intro_button_socials');
const glassBoxID = document.querySelector('#glass_box_id');

homeButton.addEventListener('click', function() {
    glassBox.style.height = '0px'
    homeButton.style.transform = 'translateX(-700px) rotateZ(90deg)'
    homeButton.style.opacity = '0%';

    setTimeout(function() {
        introPage.style.opacity = 1;
        scrollBanner.style.height = '900px';
        bannerText.style.opacity = '100%'
        homeButton.style.width = '1px'
    }, 500)

})

introButton.addEventListener('click', function() {
    introPage.style.transform = `scale(0.1, 0.1)`
    scrollBanner.style.height = '0px'
    bannerText.style.fontSize = '1px'
    setTimeout(function() {
        window.location.href = 'gallery.html'
    }, 500)

})

// Function needs fixing
function removeAllChildren() {
    glassBoxID.innerHTML = ""
}

socialsButton.addEventListener('click', removeAllChildren);

