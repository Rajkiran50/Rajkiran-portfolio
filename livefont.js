document.addEventListener("DOMContentLoaded", function () {
    const textLines = [
        "Hello, Welcome to my page",
        "It's me, Raj Kiran",
        "A passionate Computer Science Postgraduate",
        "From KL University",
        "Skilled in Web Development & Python"
    ];

    let currentLine = 0;
    let charIndex = 0;
    const dynamicText = document.getElementById("dynamic-text");

    function typeEffect() {
        if (charIndex < textLines[currentLine].length) {
            dynamicText.innerHTML += textLines[currentLine].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100); // Typing speed
        } else {
            setTimeout(eraseEffect, 1000); // Pause before erasing
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            dynamicText.innerHTML = textLines[currentLine].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50); // Erasing speed
        } else {
            currentLine = (currentLine + 1) % textLines.length; // Move to next line
            setTimeout(typeEffect, 500); // Pause before next line
        }
    }

    typeEffect(); // Start the animation
});
