// ---menu---

const menuOpen = document.querySelector(".js-menu-open");
const navigation = document.querySelector(".js-navigation");
const menuClose = document.querySelector(".js-menu-close");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("is-active");
  menuClose.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
});

menuClose.addEventListener("click", () => {
  menuOpen.classList.toggle("is-active");
  menuClose.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
});

// ---swiper---

let mySwiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  effect: "coverflow",
  draggable: true,
  releaseOnEdges: true,
  mousewheel: {
    invert: true,
  },
  speed: 800,
  slidesPerView: "3",
  centerdSlides: true,
  coverFlowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// カスタム投稿のデータを取得する
var slides = document.querySelectorAll('.swiper-slide');

// Swiperのコンテンツを更新する
mySwiper.removeAllSlides();
for (var i = 0; i < slides.length; i++) {
  mySwiper.appendSlide(slides[i]);
}

// Swiperを再初期化する
mySwiper.update();
