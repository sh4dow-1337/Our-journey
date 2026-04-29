// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Reveal Message
function revealMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}

// Music
function playMusic() {
  document.getElementById("bgMusic").play();
}

// Time Counter
const startDate = new Date("2024-01-01"); // change this

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerText =
    "Together for " + days + " days ❤️";
}

setInterval(updateTimer, 1000);
updateTimer();
