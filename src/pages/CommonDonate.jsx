import React from "react";
function CommonDonate() {
  return (
    <section>
      <div data-aos="fade-up" className="common-donate-background-image">
        <div className="common-donate-background-image-overlay">
          <h1>
                      HƏR İANƏNİN ƏHƏMİYYƏTİ
          </h1>
        </div>
        <div className="animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="common-donate">
            <div className="common-donate-about">
              <div className="common-donate-image">
                <img
                  src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
                  alt=""
                />
              </div>
              <div className="common-donate-text">
                <i className="fa-brands fa-pagelines"></i>
                <span>Həyat Fondu</span>
                <h3>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h3>
                <p>
                  Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı
                  insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su
                  gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və
                  qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
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
                <label htmlFor="name">İanə Məbləği *</label>
                <input type="name" name="" id="name" />
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
                <button>ÖDƏ</button>
              </div>
    </div>
      </section>
  );
}

export default CommonDonate;
