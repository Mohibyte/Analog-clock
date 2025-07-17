
const clock = document.querySelector('.clock');

// Add clock numbers
for (let i = 1; i <= 12; i++) {
    const angle = (i - 3) * (Math.PI * 2) / 12;
    const radius = 85;
    const x = 100 + Math.cos(angle) * radius;
    const y = 100 + Math.sin(angle) * radius;

    const num = document.createElement('div');
    num.className = 'number';
    num.textContent = i;
    num.style.left = `${x}px`;
    num.style.top = `${y}px`;
    clock.appendChild(num);
}

function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = (hour % 12) * 30 + minute * 0.5;

    document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
