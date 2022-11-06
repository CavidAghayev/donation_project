import React from "react";
import CommonProjects from "../Companents/CommonProjects/CommonProjects";
import { useState } from "react";
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
      <div data-aos="fade-up" className="donation-content">
        <div className="donation-content__about">
          <div className="donation-content__image">
            <img
              src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
              alt=""
            />
          </div>
          <div className="donation-content__text">
            <i className="fa-brands fa-pagelines"></i>
            <span>Həyat Fondu</span>
            <h3>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h3>
            <p>
              Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı insanların
              həyatını xilas etmək, ən ucqar ərazilərə təmiz su gətirmək,
              uşaqları, xüsusilə qızları məktəbə göndərmək və qadınların
              hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
            </p>
          </div>
        </div>
        <div className="donation__pay">
          <h1>İANƏ ET</h1>
          <p>
            Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />
            yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />
            istifadə edə və ianə-i edə bilərsiniz.
          </p>
          <form action="">
            <label htmlFor="text">İanə Məbləği *</label>
            <input type="text" name="" id="name" />
            <label htmlFor="surname">Ad/Soyad *</label>
            <input type="text" name="" id="surname" />
            <label htmlFor="email">E-mail *</label>
            <input type="text" name="" id="email" />
            <label htmlFor="nameofcardholder">Kart Sahibinin Adı *</label>
            <input
              className="cardname"
              type="text"
              name=""
              id="nameofcardholder"
            />

            <label htmlFor="cardnumber">Kart Nömrəsi *</label>
            <input
              className="cardnumber"
              type="text"
              name=""
              id="cardnumber"
              placeholder="0000 0000 0000 0000"
            />
            <br />
            <input
              className="time"
              type="text"
              name=""
              id=""
              placeholder="MM/YY"
            />
            <input
              className="cvv"
              type="text"
              name=""
              id=""
              placeholder="CVV2"
            />
          </form>
          <div className="btn">ÖDƏ</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
