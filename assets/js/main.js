document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const menuToggle = document.querySelector(".menu-toggle");
  const navElement = document.querySelector("header nav");

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  };

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (!linkPath) return;

    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath.endsWith("index.html"))
    ) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      if (document.body.classList.contains("menu-open")) {
        closeMenu();
      }
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (menuToggle && navElement) {
    document.addEventListener("click", (event) => {
      if (!document.body.classList.contains("menu-open")) return;
      if (
        navElement.contains(event.target) ||
        menuToggle.contains(event.target)
      ) {
        return;
      }
      closeMenu();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      document.body.classList.contains("menu-open")
    ) {
      closeMenu();
    }
  });

  const mediaQuery = window.matchMedia("(min-width: 769px)");
  const handleMediaChange = (event) => {
    if (event.matches) {
      closeMenu();
    }
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleMediaChange);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handleMediaChange);
  }
  handleMediaChange(mediaQuery);

  const buttons = document.querySelectorAll("[data-scroll]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.scroll;
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Contato enviado com sucesso! Em breve retornaremos.");
      contactForm.reset();
    });
  }
});
