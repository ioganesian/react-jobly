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

/** BACKEND ENDPOINT FOR JOB APPLICATION */

/** POST /[username]/jobs/[id]  { state } => { application }
 *
 * Returns {"applied": jobId}
 *
 * Authorization required: admin or same-user-as-:username
 * */

// router.post("/:username/jobs/:id", ensureCorrectUserOrAdmin, async function (req, res, next) {
//   const jobId = +req.params.id;
//   await User.applyToJob(req.params.username, jobId);
//   return res.json({ applied: jobId });
// });

