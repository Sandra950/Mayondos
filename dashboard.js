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

// ----- Load users from localStorage -----
const tbody = document.querySelector('#userTable tbody');

function loadUsers() {
    tbody.innerHTML = "";
    let users = [];

    // Loop through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'loggedInUser') {
            const user = JSON.parse(localStorage.getItem(key));
            users.push(user);
        }
    }

    users.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.username || ''}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ----- Logout -----
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});

// ----- Check if user is logged in -----
const currentUser = localStorage.getItem('loggedInUser');
if (!currentUser) {
    window.location.href = 'login.html';
}

loadUsers();
