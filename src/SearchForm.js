import React, { useState } from "react";
import JoblyApi from "./api";


/** Searches jobs or companies based on passed filter
 *
 * Props: SearchFilter that is passed down from parent
 *  searchJob()
 *
 * State: formData
 *
 * Joblist/CompanyList --> SearchForm
 */
//TODO: docstring what is formdata? maybe changing formdata to searchterm

function SearchForm({ SearchFilter }) {
  const [formData, setFormData] = useState("");
  /** Update form */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** Call parent function to filter */
  function handleSubmit(evt) {
    evt.preventDefault();
    SearchFilter(formData || null) ;
    setFormData(formData);
  }
  //TODO: 26 not awaiting that call, handlesubmit has to be async itself
//TODO: Why does null/undefined work but not ""
//TODO: searchFilter should be lowercase AND change getting a request to null

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