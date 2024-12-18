const messageForm = document.getElementById("messageForm");

async function handleSubmit(event) {
  event.preventDefault();
  // get the information from the form
  const formData = new FormData(messageForm);
  const body = Object.fromEntries(formData);

  // make a post request
  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // profit?
  console.log(response);
}

messageForm.addEventListener("submit", handleSubmit);
