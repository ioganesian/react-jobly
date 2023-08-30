import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function fetchJobsOnMount() {
    searchJob();
  }, []);

  async function searchJob(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList">
      <SearchForm SearchFilter={searchJob} />
      <JobCardList jobs={jobs} />
    </div>
  );
}


export default JobList;

