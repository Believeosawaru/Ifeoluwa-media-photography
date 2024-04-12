const photoshootGalleryInfo = [
    {
        imgSrc: 'gallery-images/sp-1.jpg',
        altText: 'Studio Photoshoot'
    },
    {
        imgSrc: 'gallery-images/sp-2.jpg',
        altText: 'Studio Photoshoot'
    },
    {
        imgSrc: 'gallery-images/sp-3.jpg',
        altText: 'Studio Photoshoot'
    },
    {
        imgSrc: 'gallery-images/sp-4.jpg',
        altText: 'Studio Photoshoot'
    },
    {
        imgSrc: 'gallery-images/sp-5.jpg',
        altText: 'Studio Photoshoot'
    }
]
let accum = '';

photoshootGalleryInfo.forEach((imageObj, index) => {
   const html = `
    <div class="centered">
    <div class="frame">
        <img src="${imageObj.imgSrc}" alt="${imageObj.altText}"> <!-- ondblclick="checkFull();" -->
    </div>
        </div>
    <div class="popup-full">
        <span onclick="removeFull()">&#10005</span>
        <div class="centered"><img src="${imageObj.imgSrc}" alt="${imageObj.altText}"></div>
    </div>
   `;
   accum += html;
});
document.querySelector('.photoshoot-gallery').innerHTML = accum;