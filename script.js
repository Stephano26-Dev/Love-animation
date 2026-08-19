/* =========================================================
   ANIMATION CHRISTINA ❤️
   SCRIPT PRINCIPAL
========================================================= */

const CONFIG = {
    nom: "Christina",
    monNom: "Stephano",
    dureeTransition: 800,
    nombreEtoiles: 80,
    nombreCoeurs: 25,
    nombreParticules: 40
};

let currentScene = 1;

const scenes = document.querySelectorAll(".scene");
const buttons = document.querySelectorAll(".next-btn");

document.addEventListener("DOMContentLoaded", () => {
    initScenes();
    initButtons();
    createStars();
    createFloatingHearts();
    createParticles();
    initTypingEffect();
});

function initScenes() {
    scenes.forEach((scene, index) => {
        if (index === 0) {
            scene.classList.add("active");
        } else {
            scene.classList.remove("active");
        }
    });
}

function initButtons() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const nextScene = Number(button.dataset.next);
            goToScene(nextScene);
        });
    });
}

function goToScene(sceneNumber) {
    if (sceneNumber < 1 || sceneNumber > scenes.length) {
        return;
    }

    const current = document.querySelector(".scene.active");
    const next = document.getElementById(`scene${sceneNumber}`);

    if (!next || current === next) {
        return;
    }

    current.classList.remove("active");

    setTimeout(() => {
        next.classList.add("active");
        currentScene = sceneNumber;

        requestAnimationFrame(() => {
            sceneAnimation(sceneNumber);
        });
    }, 100);
}

function sceneAnimation(sceneNumber) {
    switch (sceneNumber) {
        case 1: scene1Animation(); break;
        case 2: scene2Animation(); break;
        case 3: scene3Animation(); break;
        case 4: scene4Animation(); break;
        case 5: scene5Animation(); break;
        case 6: scene6Animation(); break;
        case 7: scene7Animation(); break;
    }
}

function scene1Animation() {
    console.log("Animation scène 1");
}

function scene2Animation() {
    createFloatingHearts();
}

function scene3Animation() {
    createParticles();
}

function scene4Animation() {
    initTypingEffect();
}

function scene5Animation() {
    const scene = document.getElementById("scene5");
    if (!scene) {
        return;
    }

    /* Retirer l'état précédent */
    scene.classList.remove("scene5-active");

    /* Force le navigateur à recalculer les animations,
       pour pouvoir rejouer la scène depuis zéro. */
    void scene.offsetWidth;

    /* Démarrer la scène */
    scene.classList.add("scene5-active");
}

function scene6Animation() {
    createStars();
}

function scene7Animation() {
    createFinalParticles();
    createFinalHearts();
    console.log("Bienvenue dans la scène finale ❤️");
}

function createStars() {
    const containers = document.querySelectorAll(".stars");

    containers.forEach(container => {
        if (container.children.length > 0) {
            return;
        }

        for (let i = 0; i < CONFIG.nombreEtoiles; i++) {
            const star = document.createElement("span");
            star.className = "star";
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${2 + Math.random() * 4}s`;
            container.appendChild(star);
        }
    });
}

function createFloatingHearts() {
    const containers = document.querySelectorAll(".floating-hearts");

    containers.forEach(container => {
        if (container.children.length > 0) {
            return;
        }

        for (let i = 0; i < CONFIG.nombreCoeurs; i++) {
            const heart = document.createElement("span");
            heart.className = "floating-heart";
            heart.innerHTML = "❤️";
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 6}s`;
            heart.style.animationDuration = `${5 + Math.random() * 7}s`;
            heart.style.fontSize = `${10 + Math.random() * 25}px`;
            container.appendChild(heart);
        }
    });
}

function createParticles() {
    const containers = document.querySelectorAll(".particles");

    containers.forEach(container => {
        if (container.children.length > 0) {
            return;
        }

        for (let i = 0; i < CONFIG.nombreParticules; i++) {
            const particle = document.createElement("span");
            particle.className = "particle";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${3 + Math.random() * 5}s`;
            container.appendChild(particle);
        }
    });
}

function initTypingEffect() {
    const textElement = document.getElementById("typing-text");

    if (!textElement) {
        return;
    }

    const text = "Tu es devenue une personne très spéciale dans mon histoire. ❤️";

    textElement.textContent = "";

    let index = 0;

    const interval = setInterval(() => {
        if (index >= text.length) {
            clearInterval(interval);
            return;
        }

        textElement.textContent += text[index];
        index++;
    }, 65);
}

function createFinalParticles() {
    const container = document.querySelector(".final-particles");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < 70; i++) {
        const particle = document.createElement("span");
        particle.className = "final-particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 6}s`;
        container.appendChild(particle);
    }
}

function createFinalHearts() {
    const container = document.querySelector(".final-particles");

    if (!container) {
        return;
    }

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");
        heart.className = "final-floating-heart";
        heart.innerHTML = "❤";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 8}s`;
        heart.style.animationDuration = `${6 + Math.random() * 8}s`;
        container.appendChild(heart);
    }
}