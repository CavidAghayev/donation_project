import React from "react";
import { useNavigate } from "react-router-dom";
function CommonProjects({ project }) {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-up" className="project">
      <div
        onClick={() => navigate(`/commonprojectdetails/${project.id}`)}
        className="project__active"
      >
        <div className="project__active__icon"></div>
        <div className="project__active__text">
          <a href="">Aktiv</a>
        </div>
      </div>
      <div className="project__image">
        <img src={project.image} alt="" />
      </div>
      <div className="project__content">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <span>{project.topic}</span>
        <a href={`/commonprojectdetails/${project.id}`}>{project.more}</a>
      </div>
    </div>
  );
}

export default CommonProjects;
