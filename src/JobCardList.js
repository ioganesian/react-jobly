import React from "react";
import JobCard from "./JobCard";
import "./JobCardList.css";

/**Renders multiple job cards
 *
 * Props: array of job objects
 *  [{id, title, company, salary, equity }, {job2} , {job3} ]
 *
 * State: None
 *
 * JobList/CompanyDetail --> JobCardList --> JobCard
 *
 */

function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(({ id, title, company, salary, equity }) => (
        <JobCard
          key={id}
          id={id}
          title={title}
          company={company}
          salary={salary}
          equity={equity}
        />
      ))}
    </div>
  );
}

export default JobCardList;