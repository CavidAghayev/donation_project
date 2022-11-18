import React from "react";
import { servicesApi } from "../../Service/apiService";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCard } from "../../Service/cartSlice";
import { useNavigate } from "react-router-dom";
function AddToBasket() {
  const navigate = useNavigate();
  const { data: products } = servicesApi.useGetProductsQuery();
  const cart = useSelector((state) => state.cartReducer.cart);
  const removeItem = useSelector((state) => state.removeReducer.removeItem);
  const dispatch = useDispatch();
  console.log(cart);
  const removeProduct = (productId) => {
    dispatch(removeFromCard(productId));
  };
  const increaseItem = (productId) => {
    dispatch(increment(productId));
  };
  const decreaseItem = (productId) => {
    dispatch(decrement(productId));
  };
  const total = cart.reduce(
    (acc, item) =>
      acc + products.find((a) => a.id === item.id).price * Number(item.count),
    0
  );
  console.log(total);
  return (
    <section>
      <div className="add-to-cart-heading">
        <div className="title">
          <span>Sənin Məhsulun</span>
        </div>
        <div className="total-price">
          <span>Ümumi Qiymət:</span>
          <span>{`${total} AZN`}</span>
        </div>
      </div>
      <div className="add-to-cart container">
        {removeItem && (
          <div className="add-to-cart-empty">
            <h1>Məhsul yoxdur.</h1>
          </div>
        )}
        {cart.map((t) => {
          let product = products.find((a) => a.id === t.id);
          console.log(product);
          return (
            <div className="add-to-cart-content" key={product.id}>
              <div className="add-to-cart-image">
                <img src={product.image} alt="" />
              </div>
              <div className="add-to-cart-items">
                <div className="add-to-cart-buttons">
                  <button onClick={() => decreaseItem(t.id)} className="sell">
                    -
                  </button>

                  <button className="count" key={t.id}>
                    {t ? t.count : 0}
                  </button>

                  <button onClick={() => increaseItem(t.id)} className="buy">
                    +
                  </button>
                </div>
                <div className="add-to-cart-price">
                  {`$${product.price}${".00"}`}
                </div>
                <div className="add-to-cart-remove">
                  <i
                    onClick={() => removeProduct(product.id)}
                    className="fa-solid fa-xmark"
                  ></i>
                </div>
              </div>
              <button key={t.id} onClick={() => navigate(`/pay/${t.id}`)}>
                Ödəniş edin
              </button>
            </div>
          );
        })}
        <div className="checkout">
          <button onClick={() => navigate("/shop")}>
            Alış-verişə davam edin
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddToBasket;
