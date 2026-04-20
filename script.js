/*INTRO TYPING ANIMATION */

const introText = "Welcome to my portfolio";
const introElement = document.getElementById("intro-text");

const colors = ["#00d4ff", "#ffcc00", "#ff4d6d", "#7cffcb", "#ffffff"];

let i = 0;

/* TYPE INTRO */
function typeIntro() {
if (i < introText.length) {
introElement.textContent += introText.charAt(i);

// color change per letter
introElement.style.color =
colors[Math.floor(Math.random() * colors.length)];

i++;
setTimeout(typeIntro, 120);
} else {
setTimeout(endIntro, 1000);
}
}

/* HIDE INTRO SCREEN */
function endIntro() {
const introScreen = document.getElementById("intro-screen");

introScreen.style.opacity = "0";
introScreen.style.visibility = "hidden";

startMainAnimations();
startRoleTypewriter(); // start role typing AFTER intro
}

/*MAIN PAGE ANIMATIONS */

function startMainAnimations() {
const image = document.querySelector(".image");
const paragraph = document.getElementById("about-text");

if (image) image.classList.add("show");
if (paragraph) paragraph.classList.add("show");
}

/*ROLE TYPEWRITER (WITH COLORS) */

const words = [
"I'm a junior software developer",
"I'm also a WordPress website developer"
];

const typeElement = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

/* ROLE TYPEWRITER */
function startRoleTypewriter() {
if (!typeElement) return;

currentWord = words[wordIndex];

if (isDeleting) {
charIndex--;
} else {
charIndex++;
}

typeElement.textContent = currentWord.substring(0, charIndex);

/* COLOR CHANGE  */
typeElement.style.color =
colors[Math.floor(Math.random() * colors.length)];

let speed = isDeleting ? 50 : 100;

/* WORD COMPLETE */
if (!isDeleting && charIndex === currentWord.length) {
speed = 1500;
isDeleting = true;
}

/* WORD DELETED */
else if (isDeleting && charIndex === 0) {
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
speed = 500;
}

setTimeout(startRoleTypewriter, speed);
}

/* START ON LOAD */

window.addEventListener("load", () => {
setTimeout(() => {
typeIntro();
}, 500);
});