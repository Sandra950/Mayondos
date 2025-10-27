// ----- Water wave animation -----
const canvas = document.getElementById('waves');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = Array.from({ length: 20 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 0,
    speed: Math.random() * 2 + 1,
    alpha: 0.5
}));

function animateWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${c.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        c.radius += c.speed;
        c.alpha -= 0.005;
        if (c.alpha <= 0) {
            c.radius = 0;
            c.alpha = 0.5;
            c.speed = Math.random() * 2 + 1;
        }
    });
    requestAnimationFrame(animateWaves);
}
animateWaves();

// ----- LocalStorage login -----
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        // Optional: store logged-in user for dashboard
        localStorage.setItem('loggedInUser', username);

        // Redirect immediately to dashboard
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password";
        message.style.color = "red";
    }
});
