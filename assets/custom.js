window.addEventListener('load', function () {
    configureSwipers();
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