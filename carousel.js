const carousel = document.getElementById('gallery');
const carouselItems = carousel.querySelectorAll('.gallery-item');
const animationDuration = 10; // Adjust animation duration in seconds

const itemWidth = 100; // Adjusted width of each item
const spacing = 20; // Spacing between items

const totalWidth = (itemWidth + spacing) * carouselItems.length; // Total width of all items including spacing
carousel.style.width = totalWidth + 'px';

carouselItems.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
});

const keyframes = `@keyframes carousel-animation {
    0% {
        transform: translateX(0);
    }
    14.29% {
        transform: translateX(calc(-${totalWidth}px / 7)); /* Move to the second image */
    }
    28.57% {
        transform: translateX(calc(-${totalWidth}px / 7 * 2)); /* Move to the third image */
    }
    42.86% {
        transform: translateX(calc(-${totalWidth}px / 7 * 3)); /* Move to the fourth image */
    }
    57.14% {
        transform: translateX(calc(-${totalWidth}px / 7 * 4)); /* Move to the fifth image */
    }
    71.43% {
        transform: translateX(calc(-${totalWidth}px / 7 * 5)); /* Move to the sixth image */
    }
    85.71% {
        transform: translateX(calc(-${totalWidth}px / 7 * 6)); /* Move to the seventh image */
    }
    100% {
        transform: translateX(-${totalWidth}px); /* Move back to the first image */
    }
}`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

function resetCarousel() {
    carousel.style.animation = 'none';
    carousel.offsetHeight; /* Trigger reflow to restart animation */
    carousel.style.animation = `carousel-animation ${animationDuration}s linear infinite`;
}

carousel.addEventListener('animationiteration', resetCarousel);

carousel.style.animation = `carousel-animation ${animationDuration}s linear infinite`;
