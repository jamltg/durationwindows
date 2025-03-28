document.getElementById("topbarToggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-dropdown").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slider-wrapper a");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Button event listeners
    nextBtn.addEventListener("click", function () {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        resetAutoSlide();
    });

    // Reset auto-slide on manual click
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});