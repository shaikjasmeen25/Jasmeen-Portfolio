document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after clicking a navigation link
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Automatically update copyright year
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Copy email address
  const copyButton = document.getElementById("copyEmail");
  const copyMessage = document.getElementById("copyMessage");

  copyButton.addEventListener("click", async function () {
    const email = "shaikjasmeen27@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      copyMessage.textContent = "Email copied successfully!";
    } catch (error) {
      copyMessage.textContent = "Please copy manually: " + email;
    }
  });
});