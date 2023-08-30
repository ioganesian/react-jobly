import React from "react";

function JobCard({job}) {
  return (
    <div className="JobCard">
      {job.title}
      {job.company}
      {job.salary}
      {job.equity}
    </div>
  )
}

export default JobCard;