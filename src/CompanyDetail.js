import React from "react";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";

/** Contain detail and job for specific company
 *
 * Prop:None
 *
 * State:
 *  company: {handle, name, description...}
 *  error: returns <div> Company not found </div> if no comapny found
 *
 *CompanyDetails--> JobCardList
 *
*/

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState();
  const [error, setError] = useState(null);

  useEffect(function fetchCompanyWithJobs() {
    async function fetchCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (errors) {
        setError(errors);
      }
    }
    fetchCompany();
  }, []);

  if (error) return <div> Company not found </div>;
  if (!company) return <LoadingSpinner />;

  return (
    <div className="CompanyDetail">

      {company.name}
      {company.description}
      <JobCardList jobs={company.jobs} />

    </div>
  );
}

export default CompanyDetail;