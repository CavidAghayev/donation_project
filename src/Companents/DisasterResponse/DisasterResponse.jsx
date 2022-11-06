import React from "react";
import { servicesApi } from "../../Service/apiService";
import DonateProjects from "../DonateProjects/DonateProjects";
function DisasterResponse() {
  const { data: projects } = servicesApi.useGetProjectsQuery();
  return (
    <section>
      <div className="disaster-response-details">
        <div className="disaster-response-details__text">
          <h1>Fəlakətə Cavab</h1>
          <p>
            Fəlakət baş verən zaman zərər çəkmiş icmalarda yaşayan <br /> və
            işləyən insanların rəhbərlik etdiyi bərpa səyləri <br /> çox vaxt
            diqqətdən kənarda qalır və kifayət <br /> qədər maliyyələşdirilmir.
          </p>
          <p>
            Həyat Fondu bu reallığı dəyişdirir. 2004-cü ildən biz etimada
            əsaslanan qrantların <br /> verilməsi və dəstək vasitəsilə qərar
            vermə səlahiyyətini böhranlardan təsirlənmiş icmalara <br />{" "}
            keçiririk.
          </p>
        </div>
      </div>
      {/* <div data-aos="fade-up" className="head">
        <div className="head-items">
        <div data-aos="fade-up" className="head-heading">
          <h1>İnsanlar vasitəsilə layihələr.</h1>
          <p>Biz hər bir layihə ilə daha ədalətli şəraitə nail olmaq üçün icmaların üzləşdiyi <br /> infrastruktur və giriş məsələlərini həll etməyi hədəfləyirik. Budur, icmalara müsbət <br /> təsir göstərən həm tamamlanmış, həm də davam edən layihələrimizdən bəziləri.</p>
        </div>
        <div className="head-content">
          {projects &&
            projects.map((a) => <DonateProjects key={a.id} project={a} />)}
        </div>
        </div>
      </div> */}
      <div className="disaster-response__details-image">
        <h1>
          Biz öz icmalarında ehtiyacları hamıdan yaxşı <br /> başa düşən
          insanlara yerdə dəstək olmağı asan, <br /> sürətli və təhlükəsiz
          edirik.
        </h1>
        <p>
          Xəbər kameraları gəlməmişdən çox əvvəl orada idilər və kameralar
          getdikdən çox sonra orada olacaqlar. <br /> Onlar öz icmalarını
          gələcək fəlakətlərə qarşı daha dayanıqlı etmək yollarını bilirlər və
          onlar artıq çox <br /> çalışırlar. Həyat Fondu ianə və qrantları
          birbaşa onların əlinə verir. Çünki maliyyənin böyük <br />{" "}
          əksəriyyətini bir neçə böyük təşkilata verən status-kvonun mənası
          yoxdur.
        </p>
        <img
          src="https://www.globalgiving.org/img/disasters/landing/DRN_fullwidth2_1500.jpg"
          alt=""
        />
      </div>
      <div className="bullent">
        <h3>
          <span>Həyat Fond</span> - dan xəbərlər alın:
        </h3>
        <div className="bullent__content">
          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter e-mail address"
          />
          <div className="btn">Abunə olun</div>
        </div>
      </div>
    </section>
  );
}

export default DisasterResponse;
