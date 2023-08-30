import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function fetchCompaniesOnMount() {
    searchCompany();
  }, []);

  async function searchCompany(searchTerm) {
    let companies = await JoblyApi.getCompanies(searchTerm);
    console.log(`searchedCompanies: ${companies}`);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="Companylist">
      <SearchForm SearchFilter={searchCompany} />
      <div className="CompanyList-companies">
        {companies.map(company => (
          <CompanyCard
            key={company.handle}
            handle={company.handle}
            name={company.name}
            description={company.description}
            logo={company.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
