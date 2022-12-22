import React from "react";
import { useParams } from "react-router-dom";
import { servicesApi } from "../../Service/apiService";
import { useDispatch, useSelector } from "react-redux";
import { productToCart } from "../../Service/cartSlice";
function ProductDetails() {
  let { id } = useParams();
  const { data } = servicesApi.useGetProductDetailsQuery(id);
  console.log(data)
  const dispatch = useDispatch();
  const addProduct = (productId) => {
    dispatch(productToCart(productId));
  };
  
  return (
    <section>
      {data && (
        <div className="product-details">
          <div className="product-details__content">
            <div className="product-details__extra-image">
              <img src={data.extraImageOne} alt="" />
              <img src={data.extraImageTwo} alt="" />
              <img src={data.extraImageThree} alt="" />
              <img src={data.extraImageFour} alt="" />
            </div>
            <div className="product-details__content__image">
              <img src={data.image} alt="" />
              <video
                muted="true"
                loop="true"
                autoplay="true"
                playsinline="true"
                src={data.video}
              ></video>
            </div>
            <div className="product-details__items">
              <span>{data.name}</span>
              <span>{`$${data.price}${".00"}`}</span>
              <p>
                <span>Material:</span> <br /> {data.material}
              </p>
              <p>
                <span>Yaxşılıq üçün alış-veriş edin:</span> <br /> {data.goal}
              </p>
              <p>
                <span>
                  Təsviri: <br />
                </span>
                {data.description}
              </p>
              <div className="product-details__buttons">
                <button
                  onClick={() => addProduct(data.id)}
                  className="add-button"
                >
                  Səbətə Əlavə Et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
