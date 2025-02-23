
function setDate() {
    const dateInput = document.getElementById('datePicker').value;
    if (dateInput) {
        localStorage.setItem('cruiseDate', dateInput);
        updateCountdown();
    }
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const cruiseDate = localStorage.getItem('cruiseDate') || '2025-05-04';

    document.getElementById('datePicker').value = cruiseDate;

    const targetDate = new Date(cruiseDate).getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "🚢 It's Cruise Time! 🚢";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', updateCountdown);
