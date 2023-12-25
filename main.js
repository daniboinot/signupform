document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmation = document.getElementById("confirmation");

  // Validation checks
  if (password !== confirmation.value) {
    alert("Passwords do not match!");
    confirmation.style.borderColor = "red";
    return;
  }

  if (username.length < 4 || username.length > 8) {
    alert("Username should be 4-8 characters!");
    return;
  }

  // Check for empty inputs
  const inputs = [username, password, confirmation.value];
  let isEmpty = false;

  inputs.forEach((input) => {
    if (!input.trim()) {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert("Please fill out all fields!");
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = "red";
    });
    return;
  }

  // If validation passes
  alert("Form submitted successfully!");

  confirmation.style.borderColor = "green";
});
