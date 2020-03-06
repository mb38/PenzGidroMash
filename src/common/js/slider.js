let swiper = new Swiper(document.querySelectorAll('.swiper-container'), {
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 800,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-navigation__next',
      prevEl: '.slider-navigation__prev',
    },
  });