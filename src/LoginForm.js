import React, { useState } from "react";

/** Searches jobs or companies based on passed filter
 *
 * Props: searchFilter that is passed down from parent
 *  ex. searchJob()
 *
 * State: searchTerm
 *
 * JobList/CompanyList --> SearchForm
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
        <input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
          <input
          label="Password"
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