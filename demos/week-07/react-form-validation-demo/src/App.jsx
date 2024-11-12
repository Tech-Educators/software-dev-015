import { useState } from "react";

export default function App() {
  // form state
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  // error state
  const [error, setError] = useState(false);

  // a submit handler
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted");
    console.log(form);
  }

  // a change handler
  function handleChange(e) {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value }); // check the other demo for a maybe clearer way
    // validate whetehr or not the passwords match
    if (e.target.name === "confirmPassword") {
      // check whether they match
      // we compare against e.target.value instead of form.confirmPassowrd because
      // setForm is async so our state value isn't actually updated yet
      if (form.password !== e.target.value) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={form.confirmPassword}
        />
        {error && <p>Passwords must match</p>}
        <button>Create New User</button>
      </form>
      <p>A preview of what is in state:</p>
      <ul>
        <li>Username: {form.username}</li>
        <li>Password: {form.password}</li>
        <li>Confirm: {form.confirmPassword}</li>
      </ul>
    </div>
  );
}
