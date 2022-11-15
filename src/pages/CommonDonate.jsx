import React from "react";
import CommonDonatePay from "../Companents/CommonDonatePay/CommonDonatePay";
function CommonDonate() {
  return (
    <section>
      <div data-aos="fade-up" className="donation-page-image">
        <div className="donation-page-image__overlay">
          <h1>HƏR İANƏNİN ƏHƏMİYYƏTİ</h1>
        </div>
        <div className="donation-page-image__animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <CommonDonatePay/>  
    </section>
  );
}

export default CommonDonate;
