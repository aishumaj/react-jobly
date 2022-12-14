import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

/** Displays individual card with basic information about a company
 *
 * Props:
 * - company
 *
 * state: none
 *
 * CompanyList -> CompanyCard
 *
*/

function CompanyCard({ company }) {

  const { handle, name, description } = company;

  return (
    <div className="companyCard">
      <Link to={`${handle}`}>
        <h6>{name}
          {company.logoUrl && <img src={company.logoUrl} alt="company logo" />}
        </h6>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;