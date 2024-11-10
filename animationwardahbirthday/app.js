// Countdown Function
function updateCountdown() {
    const birthday = new Date("November 12, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("countdown-timer").innerHTML = "Happy Birthday, Wardah!";
    }
}

// Celebrate function with confetti and popup
function celebrate() {
    startConfetti();
    document.getElementById("popup").classList.remove("hidden");
}

// Close popup function
function closePopup() {
    document.getElementById("popup").classList.add("hidden");
    stopConfetti();
}

// Confetti Animation
function startConfetti() {
    const confetti = document.getElementById('confetti-canvas');
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
    const ctx = confetti.getContext('2d');

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            r: Math.random() * 4 + 1,
            d: Math.random() * 50,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
            tilt: Math.floor(Math.random() * 10) - 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, confetti.width, confetti.height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += 1;
            if (p.y > confetti.height) {
                p.x = Math.random() * confetti.width;
                p.y = -10;
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// Stop confetti
function stopConfetti() {
    const confetti = document.getElementById('confetti-canvas');
    const ctx = confetti.getContext('2d');
    ctx.clearRect(0, 0, confetti.width, confetti.height);
}

setInterval(updateCountdown, 1000);
