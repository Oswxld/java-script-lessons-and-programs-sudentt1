// Character pools
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let charPool = "";

  if (includeLowercase) charPool += lowercase;
  if (includeUppercase) charPool += uppercase;
  if (includeNumbers) charPool += numbers;
  if (includeSymbols) charPool += symbols;

  if (charPool === "") {
    document.getElementById("password").textContent = "Please select at least one character set.";
    document.getElementById("strength").textContent = "Strength: N/A";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  document.getElementById("password").textContent = password;
  assessStrength(password);
}

function copyPassword() {
  const password = document.getElementById("password").textContent;
  if (!password) return;
  navigator.clipboard.writeText(password)
    .then(() => alert("Password copied to clipboard!"))
    .catch(() => alert("Failed to copy password."));
}

function assessStrength(password) {
  let score = 0;

  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;

  const strengthEl = document.getElementById("strength");
  let strengthText = "";
  let color = "";

  switch (score) {
    case 0:
    case 1:
      strengthText = "Very Weak";
      color = "red";
      break;
    case 2:
      strengthText = "Weak";
      color = "orange";
      break;
    case 3:
      strengthText = "Moderate";
      color = "gold";
      break;
    case 4:
      strengthText = "Strong";
      color = "green";
      break;
    case 5:
      strengthText = "Very Strong";
      color = "darkgreen";
      break;
  }

  strengthEl.textContent = `Strength: ${strengthText}`;
  strengthEl.style.color = color;
}
