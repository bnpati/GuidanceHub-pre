// Simple form validation and message display when submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Optionally, reset form
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
// Mouse Follow Animation
const mouseFollow = document.createElement('div');
mouseFollow.classList.add('mouse-follow');
document.body.appendChild(mouseFollow);

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  mouseFollow.style.left = `${mouseX}px`;
  mouseFollow.style.top = `${mouseY}px`;

  if (e.target.closest('button, a, .card')) {
    mouseFollow.classList.add('big');
  } else {
    mouseFollow.classList.remove('big');
  }
});
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
});

closeSidebar.addEventListener("click", () => {
    sidebar.style.left = "-250px";
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const text = "Welcome to Our Website!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

function startCountdown() {
  let countDownDate = new Date("March 30, 2025 00:00:00").getTime();

  let x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = formatNumber(days);
      document.getElementById("hours").textContent = formatNumber(hours);
      document.getElementById("minutes").textContent = formatNumber(minutes);
      document.getElementById("seconds").textContent = formatNumber(seconds);

      if (distance < 0) {
          clearInterval(x);
          document.querySelector(".countdown-container").innerHTML = "<h2>🎉 We are Live 🎊</h2>";
      }
  }, 1000);
}

function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}

window.onload = startCountdown;

const toggleBtn = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
