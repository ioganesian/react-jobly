import React, {useState} from "react";

// /** User signup form.
//  *
//  * Props: signup function passed from parent.
//  *
//  * State: formData
//  *
//  * ??? --> SignupForm
//  */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  });
  const [errors, setErrors] = useState([]);
  /** Update form */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** Call parent function to signup */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      setFormData(formData);
    } catch (errs) {
      setErrors(errs);
    }
  }

  return (
    <div className="SignupForm">
      <form onSubmit={handleSubmit}>
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
        <label for="firstname">First name </label>
        <input
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label for="lastname">Last name </label>
        <input
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <label for="email">Email </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
