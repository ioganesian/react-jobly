import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

/** Login form
 *
 * Shows form and manages state update on change
 *
 * Props: login function passed from parent
 *
 * State: formData
 *
 * RouteList --> LoginForm
 */

function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Update form */
  function handleChange(evt) {
    const { name, value } = evt.target;
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
      navigate("/")
    } catch (errs) {
      setFormErrors(errs);
    }
  }

  return (
    <div className="LoginForm">
      <div className="LoginForm-login">Log in</div>
      <form onSubmit={handleSubmit} className="LoginForm-form">
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* {formErrors.length
          ? <Alert type="danger" messages={formErrors} />
          : null} */}

        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;