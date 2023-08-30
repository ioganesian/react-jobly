import React from "react";
import {Link} from "react-router-dom"
import "./CompanyCard.css";

/**Renders a single company card
 *
 * Props: {handle, name, description, logo}
 *
 * State: None
 *
 * CompanyList --> CompanyCard
 *
 */

function CompanyCard({ handle, name, description, logo }) {
  return (
    <Link className="CompanyCard" to={`/companies/${handle}`}>
    <div className="CompanyCard-card">
      {name}
      {description}
      <div className="CompanyCard-img">
        <img src={logo} alt={name} />
      </div>
    </div>
    </Link>
  );
}

export default CompanyCard;