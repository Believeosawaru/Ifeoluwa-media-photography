const creativeGalleryInfo = [
    {
        imgSrc: 'gallery-images/cp-1.jpg',
        altText: 'Creative Gallery Photos'
    },
    {
        imgSrc: 'gallery-images/cp-2.jpg',
        altText: 'Creative Gallery Photos'
    },
    {
        imgSrc: 'gallery-images/cp-3.jpg',
        altText: 'Creative Gallery Photos'
    },
    {
        imgSrc: 'gallery-images/cp-4.jpg',
        altText: 'Creative Gallery Photos'
    }
]
let accum = '';

creativeGalleryInfo.forEach((imageObj, index) => {
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
document.querySelector('.creative-gallery').innerHTML = accum;