const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

emailInput.addEventListener("input", function() {
    if (emailInput.checkValidity==true) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
});
