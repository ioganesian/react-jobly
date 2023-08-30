import React from "react";

function CompanyCard({handle, name, description, logo}) {
  return (
    <div className="CompanyCard">
      {name}
      {description}
      <img src={`${logo}`} alt={name} />
    </div>
  )
}

export default CompanyCard;