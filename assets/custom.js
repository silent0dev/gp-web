window.addEventListener('load', function () {
    configureSwipers();
    configureVideos();
});

function configureSwipers() {
    document.querySelectorAll('.swiper').forEach(swiper => {
        let mobileSettings = JSON.parse(swiper.getAttribute('data-mobile-settings'));
        let deskTopSettings = JSON.parse(swiper.getAttribute('data-desktop-settings'));
        const prevButton = swiper.querySelector('.swiper-button-prev');
        const nextButton = swiper.querySelector('.swiper-button-next');
        new Swiper(swiper, {
            ...mobileSettings,
            breakpoints: {
                768: deskTopSettings
            },
            navigation: {
                prevEl: prevButton,
                nextEl: nextButton,
            }
        });
    });
}

function configureVideos() {
    document.querySelectorAll('.video-play').forEach(icon => {
        icon.addEventListener('click', function(){
            const videoContainer = this.closest('.product-video-wrapper').querySelector('.product-video');
            const video = videoContainer.querySelector('video');
            videoContainer.classList.add('active');
            video.play();
        });
    });

    document.querySelectorAll('.video-pause').forEach(icon => {
        icon.addEventListener('click', function(){
            const videoContainer = this.closest('.product-video-wrapper').querySelector('.product-video');
            const video = videoContainer.querySelector('video');
            videoContainer.classList.remove('active');
            video.pause();
        });
    });
}