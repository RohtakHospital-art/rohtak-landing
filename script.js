// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

const runCounter = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.innerText.replace(/\D/g, "");
      const increment = target / speed;

      counter.innerText = Math.ceil(increment);

      if (counter.innerText < target) {
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = counter.getAttribute("data-target") || (target + (counter.innerText.includes("+") ? "+" : ""));
      }
    };

    updateCount();
  });
};

// Trigger counter animation when user scrolls to counter section
const counterSection = document.querySelector(".counter-section");
let counterAnimated = false;

const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !counterAnimated) {
      runCounter();
      counterAnimated = true;
    }
  });
}, observerOptions);

if (counterSection) {
  observer.observe(counterSection);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// WhatsApp Button Click Tracking (Optional)
const whatsappBtn = document.querySelector(".whatsapp-float");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    console.log("WhatsApp button clicked");
  });
}

// Form Validation and Submission (if contact form exists)
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const phone = document.getElementById("phone")?.value;
    const message = document.getElementById("message")?.value;

    // Basic validation
    if (!name || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // If validation passes, you can send the form data to a server
    console.log("Form Data:", { name, email, phone, message });
    alert("Thank you for your inquiry! We will contact you soon.");

    // Reset form
    contactForm.reset();
  });
}

// Navbar Active Link Highlighting
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section && section.offsetTop <= window.pageYOffset + 100) {
      current = link.getAttribute("href");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

// Navbar Collapse on Link Click (Mobile)
const navbarToggler = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("#menu");

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      navMenu.classList.remove("show");
    }
  });
});

// Add active class styling
const style = document.createElement("style");
style.innerHTML = `
  .navbar-nav .nav-link.active {
    color: #0d6efd !important;
    font-weight: 600;
    border-bottom: 2px solid #0d6efd;
  }
`;
document.head.appendChild(style);

// Page Load Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Fade in on load
document.body.style.opacity = "0";
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.transition = "opacity 0.5s ease-in";
  document.body.style.opacity = "1";
});

// Service Card Stagger Animation (if needed)
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
});

// Add fadeInUp animation
const animationStyle = document.createElement("style");
animationStyle.innerHTML = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(animationStyle);
