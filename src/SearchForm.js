import React, { useState } from "react";
import "./SearchForm.css";

/** Searches jobs or companies based on passed filter
 *
 * Props: searchFilter passed down from parent
 *  ex. searchJob()
 *
 * State: searchTerm
 *
 * JobList/CompanyList --> SearchForm
 */

function SearchForm({ searchFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  /** Update form */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** Call parent function to filter */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await searchFilter(searchTerm || null) ;
    setSearchTerm(searchTerm);
  }

  return (
    <div className="SearchForm">
      <form className="SearchForm-form" onSubmit={handleSubmit}>
        <input
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter search term..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;