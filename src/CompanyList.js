import React, { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import LoadingSpinner from "./LoadingSpinner";

function CompanyList(){
  const [companies, setCompanies] = useState(null)

  useEffect(function fetchCompaniesOnMount(){
    console.log("FetchCompanyOnMount Function runs")
    searchCompany()
  })

  async function searchCompany(handle){
    console.log("SearchJob function runs")
   let companies = await JoblyApi.getCompanies(handle);
   setCompanies(companies)
  }

  if(!companies) return <LoadingSpinner/>

  return(
    <div className="Companylist">
      <Search/>
      {companies.map(company=>{
        <CompanyCard
          key = {company.handle}
          name = {company.name}
          description = {company.description}
          logo = {company.logo}
        />
      })}
    </div>
  )
}


export default CompanyList;
