import React from "react";
import { servicesApi } from "../../../Service/apiService";
import { useParams } from "react-router-dom";
function ProjectDetailsDonate() {
  let { id } = useParams();
  const {
    data: project,
    error,
    isLoading,
  } = servicesApi.useGetProjectQuery(id);
  return (
    <section>
      {project && (
        <div className="donation-content">
          <div className="donation-content__about">
            <div className="donation-content__image">
              <img src={project.image} />
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
      )}
    </section>
  );
}

export default ProjectDetailsDonate;
