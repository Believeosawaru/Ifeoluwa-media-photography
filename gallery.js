const galleryInfo = [
    {
        imgSrc: 'gallery-images/g-image-1.jpg',
        altText: 'Traditional Wedding Photos'
    },
    {
        imgSrc: 'gallery-images/g-image-2.jpg',
        altText: 'Traditional Wedding Photos'
    },
    {
        imgSrc: 'gallery-images/g-image-3.jpg',
        altText: 'Traditional Wedding Photos'
    },
    {
        imgSrc: 'gallery-images/g-image-4.jpg',
        altText: 'Traditional Wedding Photos'
    },
    {
        imgSrc: 'gallery-images/g-image-5.jpg',
        altText: 'Traditional Wedding Photos'
    }
]
let accum = '';

function checkFull() {
    document.querySelector('.popup-full').style.visibility = 'visible';
}
function removeFull() {
    document.querySelector('.popup-full').style.visibility = 'hidden';
}

galleryInfo.forEach((imageObj, index) => {
   const html = `
    <div class="centered">
    <div class="frame">
        <img src="${imageObj.imgSrc}" alt="${imageObj.altText}"> <!-- ondblclick="checkFull();" -->
    </div>
        </div>
    <div class="popup-full">
        <span onclick="removeFull()">&#10005</span>
        <div class="centered"><img src="${galleryInfo[index].imgSrc}" alt="${imageObj.altText}"></div>
    </div>
   `;
   accum += html;
});
document.querySelector('.gallery-div').innerHTML = accum;