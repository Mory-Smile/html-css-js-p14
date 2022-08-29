function testimonialSlider() {
  const carouselOne = document.getElementById("carousel-one");
  if (carouselOne) {
    /* If it exists */
    carouselOne.addEventListener("slid.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    });
  }
}
testimonialSlider();
