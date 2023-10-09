// Select the theme toggle element
const themeToggle = document.querySelector('#themeToggle');

// Select the page content element
const pageContent = document.querySelector('#pageContent');

// Add event listener to the theme toggle
themeToggle.addEventListener('change', function() {
  // Toggle between 'light-theme' and 'dark-theme' classes on the page content
  pageContent.classList.toggle('light-theme');
  pageContent.classList.toggle('dark-theme');
});

// Check for user's preferred color scheme and apply it automatically
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeToggle.checked = true;
  pageContent.classList.add('dark-theme');
} else {
  themeToggle.checked = false;
  pageContent.classList.add('light-theme');
}
function toggleBold() {
  var textElement = document.getElementById("text");
  
  if (textElement.style.fontWeight === "bold" || !textElement.style.fontWeight) {
    textElement.style.fontWeight = "normal";
  } else {
    textElement.style.fontWeight = "bold";
  }
}
const vibratingButton = document.getElementById("vibratingButton");

vibratingButton.addEventListener("mouseover", function() {
  vibratingButton.classList.add("vibrate");
});

vibratingButton.addEventListener("mouseout", function() {
  vibratingButton.classList.remove("vibrate");
});
function changeBackground() {
  var body = document.getElementsByTagName("body")[0];
  if (body.style.background === "white") {
    body.style.background = "lightgray"; // Измените цвет фона по вашему выбору
  } else {
    body.style.background = "white";
  }
}
