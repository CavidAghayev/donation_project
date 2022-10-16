import React from 'react'
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
        <div className="common-donate">
        <div className="common-donate-about">
          <div className="common-donate-image">
            <img
              src={project.image}
              alt=""
            />
          </div>
          <div className="common-donate-text">
            <i className="fa-brands fa-pagelines"></i>
            <span>Həyat Fondu</span>
            <h3>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h3>
            <p>
              {project.text}
            </p>
          </div>
        </div>
          <div className="common-donate-pay">
            <h1>İANƏ ET</h1>
            <p>
              Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />
              yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />
              istifadə edə və ianə-i edə bilərsiniz.
            </p>
            <form action="">
            <label htmlFor="name">İanə Məbləği *</label><br />
            <input type="name" name="" id="name" /><br />
            <label htmlFor="surname">Ad/Soyad *</label><br />
            <input type="text" name="" id="surname" /><br />
            <label htmlFor="email">E-mail *</label><br />
            <input type="text" name="" id="email" /><br />
            <label htmlFor="nameofcardholder">Kart Sahibinin Adı *</label><br />
            <input
              className="cardname"
              type="text"
              name=""
              id="nameofcardholder"
            />
            <br />
            <label htmlFor="cardnumber">Kart Nömrəsi *</label><br />
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
            <button>ÖDƏ</button>
          </div>
</div>
      )}
      </section>
  )
}

export default ProjectDetailsDonate;