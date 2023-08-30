import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";


/** Render a full list of companies
 *
 * Props:None
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

  //TODO: doctstring for this searchCompany
  async function searchCompany(searchTerm) {

    let companies = await JoblyApi.getCompanies(searchTerm);

    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  //TODO: searchFilter in line 36 should be lowercase ALSO line 35 CompanyList
  return (
    <div className="Companylist">
      <SearchForm SearchFilter={searchCompany} />
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
        </div>) : <div> Companies not found</div>}
    </div>
  );
}

export default CompanyList;
