// Function to toggle between light and dark mode
function toggleMode() {
  const currentMode = document.documentElement.getAttribute("data-mode");
  const newMode = currentMode === "light" ? "dark" : "light";

  // Apply the new mode
  applyMode(newMode);

  // Store the selected mode in local storage
  localStorage.setItem("mode", newMode);
}

// Function to apply the mode
function applyMode(mode) {
  const themeLink = document.getElementById("theme");
  const contactTheme = document.getElementById("contactTheme");
  const aboutTheme = document.getElementById("aboutTheme");
  const workTheme = document.getElementById("workTheme");
  const skillTheme = document.getElementById("skillTheme");
  const homeImage = document.getElementById("homeImage");
  const aboutImage = document.getElementById("aboutImage");
  const lnkdin = document.getElementById("lnkdin");
  const face = document.getElementById("face");
  const insta = document.getElementById("insta");
  const beha = document.getElementById("beha");
  const disc = document.getElementById("disc");
  const wtsp = document.getElementById("wtsp");

  // Update theme and other elements based on the mode
  if (mode === "dark") {
    themeLink.setAttribute("href", "styles/dark.css");
    if (contactTheme) contactTheme.setAttribute("href", "styles/contact_dark.css");
    if (aboutTheme) aboutTheme.setAttribute("href", "styles/about_dark.css");
    if (workTheme) workTheme.setAttribute("href", "styles/work_dark.css");
    if (skillTheme) skillTheme.setAttribute("href", "styles/skill_dark.css");
    if (homeImage) homeImage.setAttribute("src", "images/me_home_dark.png");
    if (aboutImage) aboutImage.setAttribute("src", "images/me_about_dark.png");
    if (lnkdin) lnkdin.setAttribute("src", "images/soc/lnkdin.png");
    if (face) face.setAttribute("src", "images/soc/face.png");
    if (insta) insta.setAttribute("src", "images/soc/insta.png");
    if (beha) beha.setAttribute("src", "images/soc/beha.png");
    if (disc) disc.setAttribute("src", "images/soc/disc.png");
    if (wtsp) wtsp.setAttribute("src", "images/soc/wtsp.png");
  } else {
    themeLink.setAttribute("href", "styles/lite.css");
    if (contactTheme) contactTheme.setAttribute("href", "styles/contact_lite.css");
    if (aboutTheme) aboutTheme.setAttribute("href", "styles/about_lite.css");
    if (workTheme) workTheme.setAttribute("href", "styles/work_lite.css");
    if (skillTheme) skillTheme.setAttribute("href", "styles/skill_lite.css");
    if (homeImage) homeImage.setAttribute("src", "images/me_home_lite.png");
    if (aboutImage) aboutImage.setAttribute("src", "images/me_about_lite.png");
    if (lnkdin) lnkdin.setAttribute("src", "images/soc/lnkdin-.png");
    if (face) face.setAttribute("src", "images/soc/face-.png");
    if (insta) insta.setAttribute("src", "images/soc/insta-.png");
    if (beha) beha.setAttribute("src", "images/soc/beha-.png");
    if (disc) disc.setAttribute("src", "images/soc/disc-.png");
    if (wtsp) wtsp.setAttribute("src", "images/soc/wtsp-.png");
  }

  // Set the data-mode attribute to reflect the current mode
  document.documentElement.setAttribute("data-mode", mode);
}

// Function to check and apply the mode on page load
function checkAndApplyMode() {
  const savedMode = localStorage.getItem("mode");

  // If there's a saved mode, apply it
  if (savedMode) {
    applyMode(savedMode);
  }
}

// Event listener for dark mode toggle button
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", toggleMode);

// Call the function to check and apply mode on page load
checkAndApplyMode();
