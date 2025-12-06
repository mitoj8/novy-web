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

// dark mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// mobilné menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
}

// render článkov do blog sekcie z json
const blogList = document.getElementById("blog-list");

if (blogList) {
    fetch("articles.json")
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                const card = document.createElement("div");
                card.className = "blog-card";
                card.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.text}</p>
                `;
                blogList.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Nepodarilo sa načítať články:", error);
            blogList.textContent = "Nepodarilo sa načítať články.";
        });
}

// slovník pojmov - kliknutím otvorenie/zatvorenie
const dictionaryList = document.getElementById("dictionary-list");

if (dictionaryList) {
    fetch("terms.json")
        .then(response => response.json())
        .then(termsData => {
            termsData.forEach(item => {
                const termDiv = document.createElement("div");
                termDiv.className = "term";
                termDiv.innerHTML = `
                    <button class="term-title">${item.term}</button>
                    <p class="term-definition">
                        ${item.definition}
                    </p>
                `;
                dictionaryList.appendChild(termDiv);
            });

            // po tom, čo sme ich vložili, pridáme logiku na rozbaľovanie
            const terms = document.querySelectorAll(".term");
            terms.forEach(term => {
                const title = term.querySelector(".term-title");
                title.addEventListener("click", () => {
                    term.classList.toggle("open");
                });
            });
        })
        .catch(error => {
            console.error("Nepodarilo sa načítať slovník:", error);
            dictionaryList.textContent = "Nepodarilo sa načítať slovník.";
        });
}