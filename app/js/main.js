let swiper = new Swiper('.swiper', {
    loop: false,
    trueMode: true,
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 20,
    autoHeight: true,
    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,
    WatchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        sensitivity: 1,
    }
});