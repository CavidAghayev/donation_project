import React from "react";

function SelectPartner({ partner }) {
  return (
    <div className="partner">
      <img src={partner.image} alt="" />
    </div>
  );
}

export default SelectPartner;
