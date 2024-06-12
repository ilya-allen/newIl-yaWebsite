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

function addText() {
  homeButton.innerHTML = ""
  const markup = `Il'ya Allen <br> Click for Site`;
  homeButton.insertAdjacentHTML('afterbegin', markup)
}

function removeText() {
  homeButton.innerHTML = ""
  const markup = `Il'ya Allen`;
  homeButton.insertAdjacentHTML('afterbegin', markup)
}

function nextPage() {
  introPage.style.transform = `scale(0.1, 0.1)`
  scrollBanner.style.height = '0px'
  bannerText.style.fontSize = '1px'
  setTimeout(function() {
      window.location.href = 'gallery.html'
  }, 500)
}

introButton.addEventListener('click', nextPage)

// Function needs fixing
function removeAllChildren() {
    glassBoxID.innerHTML = ""
}

function addVideo() {
  removeAllChildren();
  const markup = `
  <h1 class="yt_title">Recent Youtube Upload</h1>
  <iframe class="yt_upload" width="860" height="515" src="https://www.youtube.com/embed/videoseries?list=UU8gVhYtFntIG4V2ub2S3k-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div class="return_main_div">
    <h1 onclick="removeSocials()" class="return_main_text">RETURN</h1>
  </div>
  `;
  glassBoxID.insertAdjacentHTML('afterbegin', markup)
}

function addSocial() {
    removeAllChildren();

    const markup = `
        <div class="inrow">
          <div class="incol_img">
            <a href="https://www.instagram.com/the_ilya_allen/" target="_blank"><img class="icon" src="instagram.png"></a>
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Instagram</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <a href="https://www.youtube.com/channel/UC8gVhYtFntIG4V2ub2S3k-w" target="_blank"><img class="icon" src="youtube.png"></a>
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Youtube</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <a href="https://steamcommunity.com/id/realwally1/" target="_blank"><img class="icon" src="steam.png"></a>
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Steam</h2>
          </div>
        </div>
        <div class="inrow">
          <div class="incol_img">
            <a href="https://www.twitch.tv/realwallyproductions" target="_blank"><img class="icon" src="twitch.png"></a>
          </div>
          <div class="incol_text">
            <h2 class="icon_text">Twitch</h2>
          </div>
        </div>
        <div class="return_main_div">
          <h1 onclick="removeSocials()" class="return_main_text">RETURN</h1>
        </div>
    `
  glassBoxID.insertAdjacentHTML('afterbegin', markup)
  console.log(toggle)
}

function removeSocials() {
  removeAllChildren();
  const markup = `
      <div class="col">
        <h1 class="intro_text">I am Il'ya Allen</h1>
        <button class="intro_button"><img onclick="nextPage()" class="intro_button_image" src="images.png"></button>
        <button class="intro_button"><img onclick="addSocial()" class="intro_button_socials" src="socials.png"></button>
        <button class="intro_button"><img onclick="addVideo()" class="intro_button_video" src="youtube.png"></button>
      </div>
      <div class="col">
        <img src="Avatar.png">
      </div>
  `;
  console.log('yur')  
  glassBoxID.insertAdjacentHTML('afterbegin', markup);
}

// yur
document.querySelector('.intro_button_socials').addEventListener('click', addSocial);

// today was fun time on kata