import React, { useState } from "react";
import JoblyApi from "./api";

function SearchForm({ SearchFilter }) {
  const [formData, setFormData] = useState("");
  /** Update form */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** Call parent function to filter */
  function handleSubmit(evt) {
    evt.preventDefault();
    SearchFilter(formData);
    setFormData(formData);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          name="formData"
          value={formData}
          onChange={handleChange}
          placeholder="Enter search term..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;