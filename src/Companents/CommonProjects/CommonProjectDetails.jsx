import React from 'react'
import {servicesApi} from '../../Service/apiService'
import {useParams} from 'react-router-dom'
function CommonProjectDetails() {
    let {id}= useParams();
    const {data} = servicesApi.useGetCommonProjectDetailsQuery(id);
  return (
    <section>
    {
        data && (
<>
<div className="common-project-background-image">
<div className="common-project-background-image-overlay"></div>
  <div className="common-project-background-image-animation">
  <i className="fa-solid fa-angle-down"></i>
  </div>
<img src={data.backgroundImage} alt="" />
<div className="common-project-background-image-title">
<h1>{data.backgroundImageTitle}</h1>
</div>
</div>
<div className="common-project-content">
<div className="overview">
<div className="overview-content">
  <h5>{data.overviewOnceTitle}</h5>
  <p>{data.overviewText}</p>
  <h5>{data.overviewTwiceTitle}</h5>
  <p>{data.overviewLaunched}</p>
  <h5>{data.overviewThirdTitle}</h5>
  <p>{data.overviewProjecType}</p>
</div>
</div>
<div className="introduction">
<h5>{data.introductionOnceTitle}</h5>
<p>{data.onceText}</p>
<p>{data.twiceText}</p>
<p>{data.thirdText}</p>
<h1>{data.introductionTwiceTitle}</h1>
<iframe src={data.onceImage}></iframe>
<h4>{data.galery}</h4>
<div className="introduction-image">
<img src={data.twiceImage} alt="" />
</div>
</div>
</div>
<div className="common-project-impact-background-image">
<div className="common-project-impact-background-image-overlay"></div>
<div className="common-project-impact-content">
<div className="common-project-impact-text">
<h4>BİZİM TƏSİRİMİZ</h4>
<h2>KAMERUNDA 50.000 <br /> UŞAQ YETİM QALIR.</h2>
<p>Biz bunu dəyişməyə çalışırıq.</p>
</div>
<div className="common-project-impact-boxes">
  <div className="box">
  <i className="fa-light fa-children"></i>
  <h1>Dünya üzrə 300 sənətkar tərəfdaşı</h1>
  </div>
  <div className="box">
  <i className="fa-regular fa-hand-holding-droplet"></i>
  <h1>3 milyon insan təmiz su ilə təmin olunub</h1>
  </div>
  <div id='box' className="box">
  <i className="fa-light fa-children"></i>
  <h1>20 min uşağa təhsil almaq imkanı verilib</h1>
  </div>
</div>
</div>
</div>
<div className="common-donate">
      <div className="common-donate-content">
        <div className="container">
          <div className="common-donate-items">
            <div data-aos="fade-right" className="common-donate-about">
              <div className="common-donate-image">
                <img
                  src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
                  alt=""
                />
              </div>
              <div className="common-donate-text">
                <i className="fa-brands fa-pagelines"></i>
                <span>Həyat Fondu</span>
                <h4>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h4>
                <p>
                  Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı
                  insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su
                  gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və
                  qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="common-donate-pay-items">
              <div className="common-donate-pay">
                <h1>İANƏ ET</h1>
                <p>
                  Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />{" "}
                  yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />{" "}
                  istifadə edə və ianə-i edə bilərsiniz.
                </p>
                <h5>İANƏ MƏBLƏĞİ *</h5>
                <input type="text" name="" id="" />
                <h5>Ad/Soyad *</h5>
                <input type="text" name="" id="" />
                <h5>E-mail *</h5>
                <input type="text" name="" id="" />
                <h5>Kart Sahibinin Adı *</h5>
                <input
                  className="cardname"
                  type="text"
                  name=""
                  id=""
                />
                <br />
                <h5>Kart Nömrəsi *</h5>
                <input
                  className="cardnumber"
                  type="text"
                  name=""
                  id=""
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
                <button>ÖDƏ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
        )
    }
    </section>
  )
}

export default CommonProjectDetails