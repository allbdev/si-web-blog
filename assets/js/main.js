document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (!linkPath) return;

    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath.endsWith("index.html"))
    ) {
      link.classList.add("active");
    }
  });

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
});
