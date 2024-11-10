// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
// Countdown Timer Script
function startCountdown() {
    // Set the date for the countdown (e.g., School anniversary date)
    const countdownDate = new Date("Feb 18, 2025 00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").textContent = days < 10 ? '0' + days : days;
        document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is finished, display a message and clear the interval
        if (distance < 0) {
            clearInterval(interval);
            document.querySelector(".countdown-timer").innerHTML = "<h3>Event has started!</h3>";
        }
    }, 1000);
}

// Start the countdown on page load
document.addEventListener("DOMContentLoaded", startCountdown);
