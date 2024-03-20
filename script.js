'use strict';

const homeButton = document.querySelector('.home_button');
const glassBox = document.querySelector('.glass_box');
const scrollBanner = document.querySelector('.scroll_banner')
const bannerText = document.querySelector('.banner_text');
const introPage = document.querySelector('.intro_page')

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