import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function DonateProjects({ project }) {
  const navigate = useNavigate();
  return (
    <Link to={`/projectdetails/${project.id}`} className="donate-project">
      <img src={project.image} alt="" />
      <div className="donate-project__content">
        <h3>{project.name}</h3>
        <h5>{project.title}</h5>
        <div
          className="btn long--btn"
          onClick={() => navigate("/projectdetails")}
        >
          İanə Et
        </div>
      </div>
    </Link>
  );
}

export default DonateProjects;
