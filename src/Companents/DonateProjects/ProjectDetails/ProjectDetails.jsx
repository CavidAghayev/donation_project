import React from "react";
import { servicesApi } from "../../../Service/apiService";
import { useParams, useNavigate } from "react-router-dom";
function ProjectDetails() {
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    data: project,
    error,
    isLoading,
  } = servicesApi.useGetProjectQuery(id);
  console.log(project);
  return (
    <section>
      {project && (
          <div className="project-details">
          <div className="project-details__heading">
        <h1>{project.name} {project.title}</h1>
        <h3>Həyat Fondu ilə</h3>
          </div>
        <div className="project-details__items">
          <div className="project-details__items__item-1">
          <div className="project-details__items__item-1__image">
          <img src={project.image} alt="" />
          </div>
          <div className="project-details__content">
            <h1>{project.content}</h1>
            <p>{project.text}</p>
          </div>
          </div>
          <div className="project-details__donate">
          <div className="project-details__amount">
         <div className="project-details__amount-overlay"></div>
          <div className="project-details__count">
              <div className="project-details__count-goal">
                <h3>Məqsəd: {project.amount} $ </h3>
              </div>
            <div className="project-details__count-percent">
            <span>{project.percent} %</span>

           <div className="project-details__count-percent-overlay">
           </div>
               </div>
            </div>
          </div>
            <div className="btn" onClick={()=>navigate(`/projectdetailsdonate/${project.id}`)}>İndi İanə Et</div>
          </div>
        </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
