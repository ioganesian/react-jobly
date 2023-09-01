import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <label>First name</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last name</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
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
