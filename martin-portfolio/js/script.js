// Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Sticky Navbar Effect
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#141414";
        navbar.style.boxShadow = "0 4px 10px rgba(255, 7, 58, 0.3)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
        navbar.style.boxShadow = "none";
    }
});

// Typing Animation Effect
document.addEventListener("DOMContentLoaded", function () {
    let text = "Crafting seamless digital experiences, one pixel at a time.";
    let index = 0;
    let speed = 75;
    let typingElement = document.querySelector(".typing-animation");

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    typingElement.textContent = "";
    type();
});

// Skills Icons Hover Effect
document.querySelectorAll(".skills-icons img").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.filter = "grayscale(0%) brightness(1)";
        icon.style.boxShadow = "0 0 10px rgba(255, 7, 58, 0.8)";
        icon.style.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseout", () => {
        icon.style.filter = "grayscale(100%) brightness(0.8)";
        icon.style.boxShadow = "none";
        icon.style.transform = "scale(1)";
    });
});

// Contact Form Submission (Send Email)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const mailtoLink = `mailto:martinwinebrenner.dev@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    // Hide form and show success message only AFTER submission
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("confirmation-message").classList.remove("hidden");
});

// Ensure Only ONE Favicon Appears in Navbar
window.addEventListener("load", function () {
    let existingFavicon = document.querySelector(".nav-logo img");
    if (existingFavicon) {
        existingFavicon.remove(); // Remove any duplicate favicon
    }

    let navbarFavicon = document.createElement("img");
    navbarFavicon.src = "assets/icons/favicon.png";
    navbarFavicon.alt = "MW Logo";
    navbarFavicon.className = "logo-icon";

    let logoContainer = document.querySelector(".nav-logo");
    if (logoContainer) {
        logoContainer.prepend(navbarFavicon);
    }
});

// Ensure Videos Maintain Correct Size and Display Links
window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-card").forEach(card => {
        let video = card.querySelector("video");
        let githubLink = card.querySelector(".github-link");
        let liveDemoLink = card.querySelector(".video-link");

        video.style.maxHeight = "160px";

        if (liveDemoLink) {
            liveDemoLink.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }

        if (githubLink) {
            githubLink.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }
    });
});

// Ensure Wave Transitions Display Properly
window.addEventListener("load", function () {
    document.querySelectorAll(".wave-divider").forEach(wave => {
        wave.style.display = "block";
    });
});

