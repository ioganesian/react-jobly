import React, { useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "./JoblyApi";
import LoadingSpinner from "./LoadingSpinner";

function JobList(){
  const [jobs, setJobs] = useState(null)

  useEffect(function fetchJobsOnMount(){
    console.log("FetchJobOnMount Function runs")
    searchJob()
  })

  async function searchJob(title){
    console.log("SearchJob function runs")
   let jobs = await JoblyApi.getJobs(title);
   setJobs(jobs)
  }

  if(!jobs) return <LoadingSpinner/>

  return(
    <div className="Joblist">
      <Search/>
      <JobCardList jobs={jobs}/>
    </div>
  )
}


export default JobList;

