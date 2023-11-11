import React, { useContext, useEffect, useState } from "react";
import "./JobCard.css";
import userContext from "./userContext";

/** Shows limited information about a job
 *
 * Props: {id, title, company, salary, equity }
 *
 * State: applied (user has applied to job)
 *
 * JobCardList --> JobCard
 */

function JobCard({ id, title, company, salary, equity }) {

  // const { hasAppliedToJob, applyToJob } = useContext(userContext);
  // const [applied, setApplied] = useState();

  // useEffect(
  //   function updateAppliedStatus() {
  //     setApplied(hasAppliedToJob(id));
  //   },
  //   [id, hasAppliedToJob]
  // );

  /** Apply for a job */
  // async function handleApply(evt) {
  //   if (hasAppliedToJob(id)) return;
  //   applyToJob(id);
  //   setApplied(true);
  // }

  return (
    <div className="JobCard">
      <h6 className="JobCard-title">{title}</h6>
      <p>{company}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {/* <button
          className="btn btn-danger fw-bold text-uppercase float-end"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button> */}
    </div>
  );
}

export default JobCard;

