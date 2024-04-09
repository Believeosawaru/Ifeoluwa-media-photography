const framesGalleryInfo = [
    {
        imgSrc: 'gallery-images/f-1.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-2.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-3.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-4.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-5.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-6.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-7.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-8.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-9.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-10.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-11.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-12.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-13.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-14.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-15.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-16.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-17.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-18.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-19.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-20.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-21.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-22.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-23.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-24.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-25.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-26.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-27.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-28.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-29.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-30.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-31.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-32.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-33.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-34.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-35.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-36.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-37.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-38.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-39.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-40.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-41.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-42.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-43.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-44.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-45.jpg',
        altText: 'Frames'
    },
    {
        imgSrc: 'gallery-images/f-46.jpg',
        altText: 'Frames'
    }
]
let accum = '';

framesGalleryInfo.forEach((imageObj, index) => {
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
document.querySelector('.frames-gallery').innerHTML = accum;