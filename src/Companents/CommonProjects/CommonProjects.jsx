import React from "react";
import { useNavigate } from 'react-router-dom'
 function CommonProjects({ project }) {
  const navigate = useNavigate();
  return (
    <div className="project">
      <div onClick={() => navigate(`/commonprojectdetails/${project.id}`)} className="project-active">
        <div className="project-active-icon"></div>
        <div className="project-active-text">
          <a href="">Aktiv</a>
        </div>
      </div>
      <div className="project-image">
        <img src={project.image} alt="" />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <span>{project.topic}</span>
        <a href={`/commonprojectdetails/${project.id}`}>{project.more}</a>
      </div>
    </div>
  );
}

export default CommonProjects;
