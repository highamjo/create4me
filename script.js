// Light / Dark mode toggle for Create4Me

const themeToggle = document.getElementById("themeToggle");

// Check if the visitor already chose a theme before
const savedTheme = localStorage.getItem("create4me-theme");

// Apply saved theme when the page loads
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  if (themeToggle) {
    themeToggle.textContent = "🌙 Dark";
  }
}

// Toggle between light and dark mode when the button is clicked
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    if (isLightMode) {
      localStorage.setItem("create4me-theme", "light");
      themeToggle.textContent = "🌙 Dark";
    } else {
      localStorage.setItem("create4me-theme", "dark");
      themeToggle.textContent = "☀️ Light";
    }
  });
}
