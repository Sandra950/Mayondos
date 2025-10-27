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

// ----- LocalStorage signup -----
const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if username already exists
    if (localStorage.getItem(username)) {
        message.textContent = "Username already exists!";
        message.style.color = "red";
        return;
    }

    // Save user to localStorage
    const user = { fullname, email, password };
    localStorage.setItem(username, JSON.stringify(user));

    message.textContent = "Account created successfully!";
    message.style.color = "green";

    // Redirect to login page after 1.5 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

    // Optionally reset form
    form.reset();
});
