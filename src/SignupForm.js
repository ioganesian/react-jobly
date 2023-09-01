import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./SignupForm.css";

// /** User signup form.
//  *
//  * Props: signup function passed from parent
//  *
//  * State: formData
//  *
//  * App --> RouteList --> SignupForm
//  */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [errors, setErrors] = useState([]);

  /** Update form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function to signup */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
      // setFormData(formData);
    } catch (errs) {
      setErrors(errs);
    }
  }

  //TODO: for vs htmlFor
  return (
    <div className="SignupForm">
      <div className="SignupForm-signup">Sign Up</div>
      <form className="SignupForm-form" onSubmit={handleSubmit}>
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
        <label htmlFor="firstName">First name </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last name </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
