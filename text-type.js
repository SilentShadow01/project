document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('typed-text-1');
    const text2 = document.getElementById('typed-text-2');
    const text3 = document.getElementById('typed-text-3');
    const text4 = document.getElementById('typed-text-4');
    const text5 = document.getElementById('typed-text-5');

    function typeText(element, text, delay) {
        setTimeout(() => {
            let index = 0;
            const typingInterval = setInterval(() => {
                element.textContent += text[index];
                index++;
                if (index >= text.length) {
                    clearInterval(typingInterval);
                }
            }, 100); // Adjust typing speed as needed
        }, delay);
    }

    // Start typing animations
    typeText(text1, 'Hello! I am', 1000); // Delay in milliseconds
    typeText(text2, ' Mark Vincent,', 2000); // Adjust delay as needed
    typeText(text3, ' A', 3600); // Adjust delay as needed
    typeText(text4, ' Junior Web Developer.', 3800); // Adjust delay as needed
    typeText(text5, ' Welcome to my portfolio!', 6200); // Adjust delay as needed
});