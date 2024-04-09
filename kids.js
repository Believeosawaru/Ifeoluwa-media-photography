const kidsGalleryInfo = [
    {
        imgSrc: 'gallery-images/k-1.jpg',
        altText: 'Kids Photography'
    },
    {
        imgSrc: 'gallery-images/k-2.jpg',
        altText: 'Kids Photography'
    },
    {
        imgSrc: 'gallery-images/k-3.jpg',
        altText: 'Kids Photography'
    },
    {
        imgSrc: 'gallery-images/k-4.jpg',
        altText: 'Kids Photography'
    },
    {
        imgSrc: 'gallery-images/k-5.jpg',
        altText: 'Kids Photography'
    }
]
let accum = '';

kidsGalleryInfo.forEach((imageObj, index) => {
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
document.querySelector('.kids-gallery').innerHTML = accum;