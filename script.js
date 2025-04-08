// Loader hide on page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    showSection();
    typeWriter();
  });
  
  // Typing animation
  const fullText = "Hello, I'm Tej Sai Pranav";
  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      document.getElementById("typed-heading").textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Section fade-in on scroll
  const sections = document.querySelectorAll("section");
  function showSection() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const boxTop = sec.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        sec.classList.add("show");
      }
    });
  }
  window.addEventListener("scroll", showSection);
  
  // Toast message after form submit
  document.querySelector("form").addEventListener("submit", function () {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });
  
  // Dark mode toggle
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
  
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.onscroll = function () {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  };
  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Language toggle
  const translations = {
    en: {
      about: "About Me",
      resume: "Resume",
      projects: "Projects",
      contact: "Contact",
      send: "Send Message"
    },
    
  };
  
  const langBtn = document.getElementById("languageToggle");
  let currentLang = "en";
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "te" : "en";
    langBtn.textContent = currentLang === "en" ? "🌐 EN" : "🌐 TE";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[currentLang][key] || key;
    });
  });
  
  // Modal handling
  function openModal(title, desc) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
    document.getElementById("projectModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
  }