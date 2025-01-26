//--------Loader function--------
window.onload = function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const content = document.getElementById("content");

  setTimeout(() => {
    loaderWrapper.style.display = "none";
    content.style.display = "block";
  }, 3000);
};

//--------Sidebar function--------
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//--------Swiper--------
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
