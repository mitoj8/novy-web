console.log("JavaScript je pripojený a funguje.");

// po kliknutí na tlačidlo zobrazíme správu pod ním
const ctaButton = document.querySelector(".cta-button");
const message = document.getElementById("click-message");

ctaButton.addEventListener("click", function() {
    message.textContent = "Ďakujem za klik - poďme na to!";
});

// po kliknutí na kartu témy zobrazíme, ktorú tému si vybral
const topicCards = document.querySelectorAll(".topic-card");
const topicMessage = document.getElementById("topic-message");

topicCards.forEach(function (card) {
    card.addEventListener("click", function() {
        const title = card.querySelector("h3").textContent;
        topicMessage.textContent = "Vybral si tému: " + title;
    });
});

// Fade-in animácia pri scrollovaní
const fadeElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
    const windowBottom = window.innerHeight + window.scrollY;

    fadeElements.forEach(el => {
        const elementTop = el.offsetTop;

        if (windowBottom > elementTop + 50) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);