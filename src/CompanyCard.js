import React from "react";
import {Link} from "react-router-dom"
/**Renders a single company card
 *
 * Props: {handle, name, description, logo}
 *
 * State: None
 *
 * CompanyList --> CompanyCard
 *
 */
//TODO: classname needs to be changed , 19 could be more simple 
function CompanyCard({ handle, name, description, logo }) {
  return (
    <Link className="CompanyCard-card" to={`/companies/${handle}`}>
    <div className="CompanyCard">
      {name}
      {description}
      <img src={`${logo}`} alt={name} />
    </div>
    </Link>
  );
}

export default CompanyCard;