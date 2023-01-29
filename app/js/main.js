let swiper = new Swiper('.swiper', {
    loop: false,
    trueMode: true,
    speed: 800,
    spaceBetween: 20,
    autoHeight: true,
    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,
    WatchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type : 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
let swiper__sale = new Swiper('.swiper__sale',{
    loop: false,
    trueMode: true,
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 20,
    autoHeight: true,
    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,
    WatchSlidesProgress: true,
    navigation: {
        nextEl: '.sale-button-next',
        prevEl: '.sale-button-prev',
    },
});

new Swiper ('.image__in-swiper', {
    grabCursor: true,
    pagination: {
        el:'.image__in-slider__pagination',
        clickable: true,
    }
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);



let color = document.getElementsByClassName('product__item-color');
color.onclick = () => {
    color.classList.toggle('active')
    this.classList.remove('active')
}



//
// document.getElementsByClassName('.product__item-color').onclick = function() {
//     document.getElementsByClassName('.product__item-color')classList.toggle('active');
//     this.classList.remove('active');
// }