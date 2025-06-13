// Get elements
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const cssOutput = document.getElementById("cssOutput");
const copyBtn = document.getElementById("copyBtn");

// Function to update the gradient
function updateGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  document.body.style.background = gradient;
  cssOutput.textContent = `background: ${gradient};`;
}

// Event listeners
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
direction.addEventListener("change", updateGradient);

// Copy CSS code
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cssOutput.textContent)
    .then(() => alert("CSS code copied!"))
    .catch(() => alert("Failed to copy."));
});

// Initialize on page load
updateGradient();
