import React, { useState } from "react";
import "./ProfileForm.css";

function ProfileForm() {
  const { currUser, setCurrUser } = useContext(userContext);
  const [formData, setFormData] = useState({
    username: currUser.username,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email
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

//JOBLYAPI function
// async function updateProfile(username, data) {
//   let res = await JoblyApi.editProfile(username, data);
//   return res.user;
// }

  /** Call parent function to update profile */
  //TODO: UPDATE FUNCTION
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await JoblyApi.editProfile(username, data);
      navigate("/");
    } catch (errs) {
      setErrors(errs);
    }
  }

  return (
    <div className="ProfileForm">
      <div className="ProfileForm-profile">Profile</div>
      <form className="ProfileForm-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
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
        <button onClick={handleSubmit}>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;