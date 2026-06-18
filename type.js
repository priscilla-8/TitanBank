const text = "Banking Built For The Future";
const speed = 100;

let i = 0;
const typingElement = document.getElementById("typing");

function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();