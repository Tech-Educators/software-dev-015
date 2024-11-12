import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    setup: "",
    punchline: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("WOOP!");
  }

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    const newForm = { ...form, [key]: value };
    setForm(newForm);

    // or
    // setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <h1>Forms in React are fuN!</h1>
      <form onSubmit={handleSubmit}>
        <label>Setup</label>
        <input name="setup" placeholder="Setup" onChange={handleChange} />

        <label>Punchline</label>
        <input
          name="punchline"
          placeholder="Punchline"
          onChange={handleChange}
        />

        <button>Tell joke</button>
      </form>
      <p>Setup: {form.setup}</p>
      <p>Punchline: {form.punchline}</p>
    </div>
  );
}
