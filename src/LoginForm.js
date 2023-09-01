import React, { useState } from "react";

/** Login form.
 *
 * Props: login function passed from parent.
 *
 * State: formData
 *
 * ??? --> LoginForm
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([]);
  /** Update form */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** Call parent function to filter */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setFormData(formData);
    } catch (errs) {
      setErrors(errs);
    }

  }

  return (
    <div className="LoginForm">
      <form onSubmit={login}>
        <label for="username">Username </label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
          <label for="password">Password </label>
          <input
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;