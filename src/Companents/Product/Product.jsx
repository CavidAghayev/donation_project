import React from "react";
import { useDispatch, useSelector  } from "react-redux";
import { decrement, increment, productToCart } from "../../Service/cartSlice";
import {    useNavigate } from 'react-router-dom'
function Product({ product}) {
  const cart = useSelector((state) => state.cartReducer.cart);
  const selectedProduct = cart.filter((item) => item.id === product.id);
  const dispatch = useDispatch();
const navigate = useNavigate()
  const addProduct = (productId) => {
    dispatch(productToCart(productId));
    };

  const decreaseItem = (productId) => {
    dispatch(decrement(productId));
  };

  const increaseItem = (productId) => {
    dispatch(increment(productId));
  };
  return (  
    <div className="product"> 
        < div className="product-image">
        <div className="product-favorite">
        <i className="fa-regular fa-heart"></i>
      </div>
          <img onClick={()=>navigate(`/productdetails/${product.id}`)} src={product.image} alt="" />
        </div>
        <div className="product-items">
          <h3>{product.name}</h3>
          <h5>${product.price}.00</h5>
          <div className="product-items-buttons">
            <button onClick={() => decreaseItem(product.id)} className="sell">
              -
            </button>

            {selectedProduct?.map((product) => (
              <button className="count" key={product.id}>
                {product ? product.count : 0} 
              </button>
            ))}

            <button onClick={() => increaseItem(product.id)} className="buy">
              +
            </button>
          </div>
          <div onClick={()=>addProduct(product.id)}  className="add-button">Səbətə Əlavə Et</div>
        </div>
      </div >
  );
}

export default Product;
