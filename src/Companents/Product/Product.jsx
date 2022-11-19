import React from "react";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-up" className="product">
      {/* <div className="product__favorite">
        <i className="fa-regular fa-heart"></i>
      </div> */}
      <div className="product__image">
        <img
          onClick={() => navigate(`/productdetails/${product.id}`)}
          src={product.image}
          alt=""
        />
      </div>
      <div className="product__items">
        <h3>{product.name}</h3>
        <h5>{`$${product.price}${".00"}`}</h5>
      </div>
    </div>
  );
}

export default Product;
