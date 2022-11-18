import React from "react";
import CommonProjects from "../Companents/CommonProjects/CommonProjects";
import { useState } from "react";
import CommonDonatePay from "../Companents/CommonDonatePay/CommonDonatePay";
function Projects() {
  const [commonProjects, setCommonProjects] = useState(null);
  React.useEffect(() => {
    fetch("http://localhost:7700/commonProjects")
      .then((response) => response.json())
      .then((data) => setCommonProjects(data));
  }, []);
  return (
    <section>
      <div data-aos="fade-up" className="projects-page">
        <div className="projects-page__overlay">
          <h1>LAYİHƏLƏR</h1>
        </div>
        <div className="projects-page__animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div data-aos="fade-up" className="projects-page__overview">
        <h3>Ümumi Baxış</h3>
        <h2>Təsir etmək, bir anda bir layihə.</h2>
        <p>
          Biz hər bir layihə ilə daha ədalətli şəraitə nail olmaq üçün icmaların
          üzləşdiyi infrastruktur <br /> və giriş məsələlərini həll etməyi
          hədəfləyirik. Budur, icmalara müsbət təsir göstərən həm <br />{" "}
          tamamlanmış, həm də davam edən layihələrimizdən bəziləri.
        </p>
        <div className="projects-page__overview__topics">
          <a href="">Hamısı</a>
          <a href="">Kənd Təsərrüfatı</a>
          <a href="">Arıçılıq</a>
          <a href="">Təmiz Su</a>
          <a href="">Təhsil</a>
        </div>
      </div>
      <div className="projects">
        <div data-aos="fade-up" className="projects__content">
          {commonProjects &&
            commonProjects.map((a) => (
              <CommonProjects key={a.id} project={a} />
            ))}
        </div>
      </div>
      <div className="projects-pagination">
        <div className="projects-pagination__number-one">1</div>
        <div className="projects-pagination__number-two">2</div>
        <div className="projects-pagination__number-three">3</div>
        <div className="projects-pagination__number-four">4</div>
      </div>
        
      <CommonDonatePay/>
    </section>
  );
}

export default Projects;
