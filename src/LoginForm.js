import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

/** Login form.
 *
 * Props: login function passed from parent.
 *
 * State: formData
 *
 * ??? --> LoginForm
 */

function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  /** Update form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("name & value", `${name} ${value}`);
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function to filter */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      // setFormData(formData);
      navigate("/")

    } catch (errs) {
      setErrors(errs);
    }

  }


  return (
    <div className="LoginForm">

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password </label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  );
}

export default LoginForm;