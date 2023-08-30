import React from "react";
import JobCard from "./JobCard";

/**Displays list of job card
 *
 */
function JobCardList({jobs}){

  return(
    <div className="JobCardList">
      {jobs.map(job=>(
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
        />
        ))}
    </div>
  )
}

export default JobCardList;