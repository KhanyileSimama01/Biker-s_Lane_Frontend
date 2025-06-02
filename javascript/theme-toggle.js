document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");

  // Apply stored theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");

      if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }
});