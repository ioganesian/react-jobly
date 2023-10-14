import React from "react";
import "./JobCard.css";

/** Shows limited information about a job
 *
 * Props: {id, title, company, salary, equity }
 *
 * State: None
 *
 * JobCardList --> JobCard
 */

function JobCard({ id, title, company, salary, equity }) {
  return (
    <div className="JobCard">
      <h6 className="JobCard-title">{title}</h6>
      <p>{company}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;

