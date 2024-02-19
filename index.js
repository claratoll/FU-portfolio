const emailElement = document.getElementById("email");
const toast = document.createElement("div");
const contactElement = document.getElementById("contact");
toast.className = "toast";
toast.textContent = "Email address copied to clipboard";
contactElement.appendChild(toast);

emailElement.addEventListener("click", function () {
  // Create a temporary input element to copy the email address to the clipboard
  const tempInput = document.createElement("input");
  tempInput.value = "info@claratoll.se"; // Replace with your actual email address
  document.body.appendChild(tempInput);

  // Select the email address text
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the email address to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Show the toast alert
  toast.classList.add("show");

  // Hide the toast alert after 2 seconds (you can adjust the time)
  setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
});
