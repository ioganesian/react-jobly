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
      <form onSubmit={handleSubmit}>
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