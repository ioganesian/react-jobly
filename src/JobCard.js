import React from "react";
import "./JobCard.css";

/**Renders a single job card
 *
 * Props: {id, title, company, salary, equity }
 *
 * State: None
 *
 * JobCardList --> JobCard
 *
 */
function JobCard({ id, title, company, salary, equity }) {
  return (
    <div className="JobCard">
      <p><b>{title}</b></p>
      <p>{company}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
