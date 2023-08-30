import React from "react";

function JobCard({id, title, company, salary, equity }) {
  return (
    <div className="JobCard">
      {title}
      {company}
      {salary}
      {equity}
    </div>
  )
}

export default JobCard;
