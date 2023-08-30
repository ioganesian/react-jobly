import React from "react";
import JobCard from "./JobCard";

/**Renders multiple job cards
 *
 * Props: array of job objects
 *  [{id, title, company, salary, equity }, {job2} , {job3} ]
 *
 * State: None
 *
 * JobList/CompanyDetail-->JobCardList --> JobCard
 *
 */
function JobCardList({ jobs }) {
 //TODO: FIX THE destructuring of the props
  return (
    <div className="JobCardList">

      {jobs.map(({id,title,company,salary,equity}) => (
        <JobCard
          key={job.id}    //key = {id}
          id={job.id}   //key = {id}
          title={job.title}
          company={job.company}
          salary={job.salary}
          equity={job.equity}
        />
      ))}

    </div>
  );
}

export default JobCardList;