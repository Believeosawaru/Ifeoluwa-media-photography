const productGalleryInfo = [
    {
        imgSrc: 'gallery-images/pp-1.jpg',
        altText: 'Product Photography'
    },
    {
        imgSrc: 'gallery-images/pp-2.jpg',
        altText: 'Product Photography'
    },
    {
        imgSrc: 'gallery-images/pp-3.jpg',
        altText: 'Product Photography'
    }
]
let accum = '';

productGalleryInfo.forEach((imageObj, index) => {
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
document.querySelector('.product-gallery').innerHTML = accum;