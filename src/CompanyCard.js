import React from "react";

function CompanyCard({company}) {
  return (
    <div className="CompanyCard">
      {company.name}
      {company.description}
      <img src={`${company.logo}`} alt={company.name} />
    </div>
  )
}

export default CompanyCard;