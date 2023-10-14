import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
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
  const [formErrors, setFormErrors] = useState([]);

  /** Update form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Redirect to home page on form close */

  function handleCloseClick() {
    navigate("/");
  }

  /** Call parent function to signup */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
      // setFormData(formData);
    } catch (errs) {
      setFormErrors(errs);
    }
  }

  return (
    <div className="SignupForm">
      <div className="overlay"></div>
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">

        <div className="card SignupForm-card">
          <button className="LoginForm-close" onClick={handleCloseClick}>X</button>
          <div className="card-body mt-3">

            <h4 className="mb-2 SignupForm-h4">Sign Up</h4>
            <form className="SignupForm-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">First name</label>
                <input
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <div className="text-center mt-3">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
