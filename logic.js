document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const inputField = document.getElementById("input");
  const dataDisplay = document.getElementById("dataDisplay");

  // Create new paragraph
  const newParagraph = document.createElement("p");
  newParagraph.textContent = inputField.value;

  // Add new paragraph to the data display
  dataDisplay.appendChild(newParagraph);

  // Clear the input field
  inputField.value = "";
});
