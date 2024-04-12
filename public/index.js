function gImage(digit, number) {
    document.querySelector(`.popup-div-${digit}`).style.visibility = 'visible';
    document.querySelector(`.${number}-image`).style.opacity = '0.07';
}
function cancel(digit, number) {
    document.querySelector(`.popup-div-${digit}`).style.visibility = 'hidden';
    document.querySelector(`.${number}-image`).style.opacity = '1';
}

function ImgFull(digit, number, imgName) {
    document.querySelector('.fullscreen-popup').style.visibility = 'visible'
    cancel(digit, number)

    document.querySelector('.fullscreen-popup').innerHTML = `
      <span onclick="hideFull()">&#10005</span>
        <div class="both-centered">
            <img src="${imgName}" alt="Traditional Marriage Photos" 
            class="fullscreen-img">
        </div>
    `
}

function hideFull() {
    document.querySelector('.fullscreen-popup').style.visibility = 'hidden'
}