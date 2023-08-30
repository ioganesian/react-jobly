import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";
import "./CompanyList.css";


/** Render a full list of companies
 *
 * Props: None
 *
 * State: companies [{handle,description, name....},{comp2}, {comp3}]
 *
 * CompanyList --> SearchForm & CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  /** Makes API request and sets the state on mount */
  useEffect(function fetchCompaniesOnMount() {
    searchCompany();
  }, []);

  /** Makes API request to filter companies by search term */
  async function searchCompany(searchTerm) {
    const companies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="Companylist">
      <SearchForm searchFilter={searchCompany} />
      {companies.length ?
        (<div className="CompanyList-companies">
          {companies.map(company => (
            <CompanyCard
              key={company.handle}
              handle={company.handle}
              name={company.name}
              description={company.description}
              logo={company.logoUrl}
            />
          ))}
        </div>) : <div>Companies not found</div>}
    </div>
  );
}

export default CompanyList;
