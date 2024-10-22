const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();

  // get the information from our form using formData
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  console.log(formObj);

  const response = await fetch("http://localhost:8080/message", {
    method: "POST",
    body: JSON.stringify(formObj),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  console.log(data);
}

form.addEventListener("submit", handleSubmit);
