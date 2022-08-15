import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ id, name, biography, images }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card mt-2">
        <div className="d-flex">
          <div className="col-6">
            <img src={images.sm} alt={name} />
          </div>
          <div className="col-6">
            <div className="card-body">
              <p className="card-title text-secondary">{name}</p>
              <p className="card-text text-secondary">{biography.fullName}</p>
              <p className="card-text">
                <small className="text-muted">
                  {biography.firstAppearance}
                </small>
              </p>

              <Link to={`/hero/${id}`} className="btn btn-outline-primary m-2">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
