'use strict';

const homeButton = document.querySelector('.home_button');
const glassBox = document.querySelector('.glass_box');

homeButton.addEventListener('click', function() {
    glassBox.style.height = '0px'
})