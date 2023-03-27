// const slides = document.getElementsByClassName("slide-element");
// let slideIndex = 1;
// var slideInterval = setInterval(function () {
//     plusSlides(1);
// }, 5000);
// showSlides(slideIndex);


// function plusSlides(n) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(function () {
//         plusSlides(1);
//     }, 5000);
//     showSlides((slideIndex += n));
// }

// function showSlides(n) {
//     if (n > slides.length) slideIndex = 1;
//     if (n < 1) slideIndex = slides.length;
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.toggle("slide-out-element", i !== slideIndex - 1);
//         setTimeout(function () {
//             slides[i].classList.toggle(
//                 "slide-out-element",
//                 i !== slideIndex - 1
//             );
//             slides[i].classList.toggle("hide-element", i !== slideIndex - 1);
//         }, 350);
//     }
// }

// $(document).ready(function () {
//     $(".btn-close").on("click", function () {
//         $(this)
//             .closest(".position-fixed")
//             .fadeOut("slow", function () {
//                 $(this).remove();
//             });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const sizeButtons = document.querySelectorAll("#size-buttons button");
    sizeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            sizeButtons.forEach(function (btn) {
                btn.classList.remove("selected-size");
            });
            this.classList.add("selected-size");
        });
    });
});


function scrollToBottom() {
    // Check if the user is already on the home page
    if (window.location.pathname !== "/") {
        // If not, navigate to the home page and add a parameter to indicate the need for scrolling
        window.location.href = "/?scrollToBottom=true";
    } else {
        // If already on the home page, just scroll to the bottom
        window.scrollTo({
            top: 4300,
            behavior: "smooth",
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToBottomParam = urlParams.get("scrollToBottom");

    if (scrollToBottomParam === "true") {
        scrollToBottom();
    }
});
