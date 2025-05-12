const items = document.querySelectorAll(".process-item");

items.forEach((item) => {
  const header = item.querySelector(".process-header");
  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    items.forEach((i) => {
      i.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-box2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const wrapper = document.querySelector(".mySlides-wrapper");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active-dot");

  const slideWidth = slides[0].offsetWidth + 30; // slide + gap
  const containerWidth = document.querySelector(".box13-a-slideshow-container").offsetWidth;
  const offset = -((slideIndex - 1) * slideWidth - (containerWidth - slideWidth) / 2);
  wrapper.style.transform = `translateX(${offset}px)`;
}



  





