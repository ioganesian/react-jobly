import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";

/** Shows a full list of jobs
 *
 * Props:None
 *
 * State: Jobs [{id, title,company,salary,equity},{job2},{job3}]
 *
 * JobList--> SearchForm & JobCardList
 */

function JobList() {
  const [jobs, setJobs] = useState(null);

  /** Makes API request and sets the state on mount */
  useEffect(function fetchJobsOnMount() {
    searchJob();
  }, []);

  /** Makes API request to filter jobs by search term */
  async function searchJob(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList">
      <SearchForm searchFilter={searchJob} />
      {jobs.length ?
        (<JobCardList jobs={jobs} />) : <div>Jobs not found</div>
      }
    </div>
  );
}


export default JobList;

