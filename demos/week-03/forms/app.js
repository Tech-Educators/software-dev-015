const formElement = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault(); // the form will no longer refresh the page

  // this is one way of getting the information from the form, but we prefer the other way
  console.log(event.target.username.value);
  console.log(event.target.password.value);

  // the other other is using formData
  // first we create our formData using the form DOM Node
  const data = new FormData(formElement);

  // then we get the values as an object from our formData
  const formValues = Object.fromEntries(data);

  console.log(formValues);

  formElement.reset(); // just clears all the fields in the form
}

formElement.addEventListener("submit", handleSubmit);

// EXTRA
// button that shows the password
const showHideBtn = document.getElementById("show-hide");

function handleShowHide(event) {
  event.preventDefault();
  const pwInput = document.getElementById("pw-input");
  if (pwInput.type === "password") {
    pwInput.type = "text";
  } else {
    pwInput.type = "password";
  }
}

showHideBtn.addEventListener("click", handleShowHide);
