const eventGalleryInfo = [
    {
        imgSrc: 'gallery-images/ep-1.jpg',
        altText: 'Event Coverage Photos'
    },
    {
        imgSrc: 'gallery-images/ep-2.jpg',
        altText: 'Event Coverage Photos'
    },
    {
        imgSrc: 'gallery-images/ep-3.jpg',
        altText: 'Event Coverage Photos'
    },
    {
        imgSrc: 'gallery-images/ep-4.jpg',
        altText: 'Event Coverage Photos'
    },
    {
        imgSrc: 'gallery-images/ep-5.jpg',
        altText: 'Event Coverage Photos'
    }
]
let accum = '';

eventGalleryInfo.forEach((imageObj, index) => {
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
document.querySelector('.event-gallery').innerHTML = accum;