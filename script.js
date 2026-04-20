const words = [
"I'm a junior software developer",
"I'm also a WordPress website developer"
];

const colors = ["#00d4ff", "#ffcc00", "#ff4d6d", "#7cffcb"];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typeElement = document.getElementById("typewriter");
const image = document.querySelector(".image");
const paragraph = document.getElementById("about-text");

/* START SEQUENCE */
window.addEventListener("load", () => {
setTimeout(() => {
image.classList.add("show");
startTyping();
}, 2500); // after intro disappears
});

/* TYPEWRITER FUNCTION */
function startTyping() {
currentWord = words[wordIndex];

if (isDeleting) {
charIndex--;
} else {
charIndex++;
}

typeElement.textContent = currentWord.substring(0, charIndex);

/* CHANGE COLOR RANDOMLY */
typeElement.style.color =
colors[Math.floor(Math.random() * colors.length)];

let speed = isDeleting ? 50 : 100;

if (!isDeleting && charIndex === currentWord.length) {
speed = 1500;
isDeleting = true;
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
speed = 500;
}

/* SHOW PARAGRAPH AFTER FIRST FULL WORD */
if (wordIndex === 0 && charIndex === currentWord.length) {
setTimeout(() => {
paragraph.classList.add("show");
}, 500);
}

setTimeout(startTyping, speed);
}