import React from "react";

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
      {title}
      {company}
      {salary}
      {equity}
    </div>
  );
}

export default JobCard;
