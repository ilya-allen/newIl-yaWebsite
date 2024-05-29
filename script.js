'use strict';

const homeButton = document.querySelector('.home_button');
const glassBox = document.querySelector('.glass_box');
const scrollBanner = document.querySelector('.scroll_banner')
const bannerText = document.querySelector('.banner_text');
const introPage = document.querySelector('.intro_page')
const introButton = document.querySelector('.intro_button_image')
const returnButton = document.querySelector('.return_button');
const socialsButton = document.querySelector('.intro_button_socials');
const glassBoxID = document.querySelector('#glass_box_id');

let toggle = false;


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

function addSocial() {
    removeAllChildren();

    const markup = `
        <div class="inrow">
          <div class="incol_img">
            <img class="icon" src="instagram.png">
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Instagram</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <img class="icon" src="youtube.png">
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Youtube</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <img class="icon" src="steam.png">
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Steam</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <img class="icon" src="twitch.png">
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Twitch</h2>
          </div>
        </div>
        <div class="return_main_div">
          <h1 class="return_main_text">RETURN</h1>
        </div>
    `
  glassBoxID.insertAdjacentHTML('afterbegin', markup)
  console.log(toggle)
  createListener();
}

function removeSocials() {
  removeAllChildren();
  const markup = `
      <div class="col">
        <h1 class="intro_text">I am Il'ya Allen</h1>
        <button class="intro_button"><img class="intro_button_image" src="images.png"></button>
        <button class="intro_button"><img class="intro_button_socials" src="socials.png"></button>
      </div>
      <div class="col">
        <img src="Avatar.png">
      </div>
  `;
  console.log('yur')  
  glassBoxID.insertAdjacentHTML('afterbegin', markup);
  createListener();
}

function createListener() {
  if(toggle == false) {
    document.querySelector('.return_main_div').addEventListener('click', removeSocials);
    toggle = !toggle;
  }

  if (toggle == true) {
    document.querySelector('.intro_button_socials').addEventListener('click', addSocial);
    toggle = !toggle;
  }
}

document.querySelector('.intro_button_socials').addEventListener('click', addSocial);