import React from "react";
import DonateProjects from "../Companents/DonateProjects/DonateProjects";
import BasePartner from "../Companents/BasePartner/BasePartner";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCube } from "swiper";
import "swiper/css/effect-cube";
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import Bullent from "../Companents/Bullent/Bullent";
function Home() {
  const { pathname } = useLocation();
  React.useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  const navigate = useNavigate();
  const [donateProjects, setDonateProjects] = useState(null);
  React.useEffect(() => {
    fetch("http://localhost:7700/donateProjects")
      .then((response) => response.json())
      .then((data) => setDonateProjects(data));
  }, []);
  console.log(donateProjects);
  const [basePartners, setBasePartners] = useState(null);
  React.useEffect(() => {
    fetch("http://localhost:7700/basePartners")
      .then((response) => response.json())
      .then((data) => setBasePartners(data));
  }, []);
  console.log(basePartners);
  return (
    <section>
      <div data-aos="fade-up" className="home-video">
        <div className="home-video--overlay"></div>
        <video
          id="home-video"                                                                                                                                            
          muted="false"
          loop="true"
          autoplay="true"
          playsinline="true"
          poster="https://149442961.v2.pressablecdn.com/wp-content/uploads/malaika_home.jpg"
        >
          <source
            src="https://malaika.org/wp-content/uploads/malaika-3.mp4"
            type="video/mp4"
          ></source>
          Your browser is not supported!
        </video>

        <div className="home-video__text">
          <h5>BİZİM XEYİRLİYƏ YANAŞIMIMIZ SADƏDIR</h5>
          <h1>
            Afrikaya Davamlı Layihələrlə <br /> Dəstək.
          </h1>
          <p>
            Afrika ağır vəziyyətdədir və bir çoxları iqtisadi <br />
            mübarizələr səbəbindən ailələrini dolandıra bilmirlər.
          </p>
          <a href="/projects=">
            <span>Sosyal Layihələr</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="home-video__contact-icons">
          <ul>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-up" className="about-content">
        <div className="about-content__items">
          <span>BİZİM HAQQIMIZDA</span>
          <h1>BİZİM HAQQIMIZDA</h1>
          <p>
            Təhsil, su və səhiyyə xidmətlərinə çıxış Konqo Demokratik <br />{" "}
            Respublikasında bütün icmanı gücləndirib. Malaykanın icma əsaslı
            yanaşması bütün dünyada təkrarlana bilən bir modeldir.
          </p>
          <div className="btn" onClick={() => navigate("/about")}>
            Daha çox oxu
          </div>
        </div>
        <div className="cube">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={true}
            pagination={true}
            modules={[EffectCube, Pagination, Autoplay]}
            className="cube__swiper"
          >
            <SwiperSlide>
              <img src="https://www.ideauniversal.org/wp-content/uploads/2021/11/4-1.png?id=5506" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.ideauniversal.org/wp-content/uploads/2021/11/6.png?id=5508" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.ideauniversal.org/wp-content/uploads/2021/11/4-1.png?id=5506"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.ideauniversal.org/wp-content/uploads/2021/11/3.png?id=5510" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div data-aos="fade-up" className="donation-board">
        <div className="donation-board__content">
          <h1>
            Hər kəsə kömək edə bilmərik, amma hamı kiməsə kömək edə bilər{" "}
          </h1>
          <div className="btn gray--btn" onClick={() => navigate("/about")}>
            İanə Et
          </div>
        </div>
      </div>
      <div className="aid-countries">
        <div data-aos="fade-up" className="aid-countries__text">
          <h1>İnsanlar vasitəsilə layihələr.</h1>
          <p>
            Biz hər bir layihə ilə daha ədalətli şəraitə nail olmaq üçün
            icmaların üzləşdiyi <br /> infrastruktur və giriş məsələlərini həll
            etməyi hədəfləyirik. Budur, icmalara müsbət <br /> təsir göstərən
            həm tamamlanmış, həm də davam edən layihələrimizdən bəziləri.
          </p>
        </div>
        <div data-aos="fade-up" className="aid-countries__country-projects">
          {donateProjects &&
            donateProjects.map((a) => (
              <DonateProjects key={a.id} project={a} />
            ))}
        </div>
      </div>
      <div className="home-partners">
        <div data-aos="fade-up" className="home-partners__heading">
          <h1>Tərəfdaşlarımız</h1>
          <p>
            Tərəfdaşlarımızın sarsılmaz öhdəliyi və əvəzsiz <br /> dəstəyi
            proqramlarımızın uğurunu təmin edən və bizi hər gün ruhlandıran
            şeydir.
          </p>
        </div>
        <div data-aos="fade-up" className="home-partners__basics">
          {basePartners &&
            basePartners.map((a) => <BasePartner key={a.id} partner={a} />)}
        </div>
      </div>
      <Bullent/>
    </section>
  );
}
export default Home;
