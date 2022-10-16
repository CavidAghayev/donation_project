import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-overlay"></div>
      <div className="footer-bottom">
        <span>Müəllif hüquqları qorunur</span>
      </div>
      <div className="footer-content container">
        <NavLink to="/" className="footer-logo">
          <div className="logo">
            <i className="fa-brands fa-pagelines"></i>
          </div>
          <div className="fund-name">
            <h3>Həyat Fondu</h3>
          </div>
        </NavLink>
        <div className="footer-news-bullent">
          <form action="">
          <label htmlFor="">Xəbər Bülleteni</label>
          <br />
          <input
            type="name"
            name=""
            id="name"
            placeholder="Adınızı daxil edin"
          />{" "}
          <br />
          <input
            type="surname"
            name=""
            id="surname"
            placeholder="Soyadınızı daxil edin"
          />{" "}
          <br />
          <input
            type="email"
            name=""
            id="email"
            placeholder="E-poçt ünvanınızı daxil edin"
          />{" "}
          <br />
          <button>Bülletenimizə abunə olun</button>
          </form>
        </div>
        <div className="footer-contact">
          <div className="contact-us">
            <h5>Bizimlə əlaqə</h5>
            <span>info@həyatfondu.org</span>
          </div>
          <div className="locate-us">
            <h5>Bizi Tapın</h5>
            <span>+994 612-217-0747</span>
          </div>
          <div className="follow-us">
            <h5>Bizi izləyin</h5>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-resource">
          <div className="content">
            <h5>Bağlantılar</h5>
            <a href="/about">Haqqımızda</a>
            <a href="projects">Sosyal Layihələr</a>
            <a href="/shop">Mağaza</a>
            <a href="/news">Hekayələr</a>
            <a href="/contact">Əlaqə</a>
            <a href="/commondonate">İanə</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
