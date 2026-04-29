// Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// ❤️ Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// 💌 Reveal message
function revealMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}

// 🎶 Music
function playMusic() {
  document.getElementById("bgMusic").play();
}

// ⏳ Timer
const startDate = new Date("2024-01-01");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText =
    days + " days of loving you ❤️";
}
setInterval(updateTimer, 1000);
updateTimer();

// ✨ Typing Effect (Forward + Reverse)
const text = "Anuj loves Rani ❤️";
let index = 0;
let isDeleting = false;

function typeEffect() {
  const display = document.getElementById("typingText");

  if (!isDeleting) {
    display.innerHTML = text.substring(0, index++);
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    display.innerHTML = text.substring(0, index--);
    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
