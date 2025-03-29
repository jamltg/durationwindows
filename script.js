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

if (SVG.supported) {
    //All code goes here

    var duration1 = new StarShine({
        ID: 'starshineNX',
        width: 220, //Optional. Viewbox width.
        height: 66, //Optional. Viewbox height.
        x: 134, //Optional. Default: 0. x coordinate of the star.
        y: 50, //Optional. Default: 0. y coordinate of the star.
        size: 50, //Optional. Default: 50. Size of the star.
        color: '#fff', //Optional. Default: '#fff'. String, that specifies the color of the star in css format. Like '#FFFFFF' or 'rgb(255, 255, 255)'
       starType: 'default', //Optional. When not specified or unknown - draws the octal star.
        duration: 500, //Optional. Default: 1000. Time in ms that takes to the star to grow to it's size and then decrease back.
        interval: 200, //Optional. Default: 1000. Time in ms between the next star begins animation after the BEGINING of the previous star.
        delay: 6000, //Optional. Default: 0. Time in ms after the last star of the loop stops it's animation and before the first begins.
       debug: true //Optional. Default: false. Displays mouse coordinates to help to adjust star positions.
    });

    duration1.loop(function () {
      //  this.star({x: 380, y: 355 });
        this.star({x: 12, y: 22 });
        this.star({x: 83, y: 45}); 
        this.star({x: 194, y: 18 });
      //  this.star({x: 681, y: 380 });
      //  this.star({x: 261, y: 290 });
      //  this.star(); //No parameters. All values will be taken from defaults.
    });

} else {
    //fallback
    alert('svg not supported');
}