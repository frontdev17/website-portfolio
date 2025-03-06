
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


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


document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); 

    let form = event.target;
    let formData = new FormData(form);
    let confirmationMessage = document.getElementById("confirmation-message");

    try {
        let response = await fetch("https://formspree.io/f/xldjrdpk", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
           
            form.style.display = "none";

           
            confirmationMessage.classList.remove("hidden");
            confirmationMessage.innerHTML = "✅ Message Sent Successfully!";
            confirmationMessage.style.opacity = "0"; // Start hidden
            confirmationMessage.style.display = "block";

           
            setTimeout(() => {
                confirmationMessage.style.opacity = "1";
                confirmationMessage.style.transition = "opacity 0.5s ease-in-out";
            }, 100);
        } else {
            alert("There was a problem submitting the form. Please try again later.");
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});


window.addEventListener("load", function () {
    let existingFavicon = document.querySelector(".nav-logo img");
    if (existingFavicon) {
        existingFavicon.remove(); 
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
