window.addEventListener("load", () => {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s",
  });

  const btns = document.querySelectorAll("main ul li");
  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      grid.arrange({
        filter: sort,
      });
    });
  }

  const items = document.querySelectorAll("article");
  const aside = document.querySelector("aside");
  const close = aside.querySelector(".close");
  const mySwiper2 = aside.querySelector(".mySwiper2");
  const mySwiper2Slide = mySwiper2.querySelectorAll(".swiper-slide");

  for (let el of items) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      aside.style.opacity = "1";
      aside.style.width = "80vw";
      aside.style.height = "80vh";
      aside.style.zIndex = "10";

      index = Array.from(items).indexOf(e.currentTarget);
      swiper2.activeIndex = index + 1;
      swiper.activeIndex = index + 4;
      console.log(swiper);
    });
  }

  close.addEventListener("click", () => {
    aside.style.opacity = "0";
    aside.style.width = "1vw";
    aside.style.height = "1vh";
    aside.style.zIndex = "-10";
  });
});
