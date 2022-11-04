import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesApi } from '../../Service/apiService'
import { useDispatch, useSelector  } from "react-redux";
import { decrement, increment, productToCart } from "../../Service/cartSlice";
 function ProductDetails() {
    let {id} = useParams();
  const { data} = servicesApi.useGetProductDetailsQuery(id);
  const cart = useSelector((state) => state.cartReducer.cart);
  const selectedProduct = cart.filter((item) => item.id === data.id);
  const dispatch = useDispatch();
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
    <section>
    {
        data && (
        
            <div className='product-details'>
                  <div className="shop-search">
        <div className="products-category">
          <ul>
          <li>HAMISI</li>
          <li>ŞƏRFLƏR</li>
          <li>AYAQQABILAR</li>
          <li>ŞORTLAR</li>
          <li>GÖDƏKCƏLƏR</li>
          </ul>
        </div>
          <form action="">
          <input type="name" name="name" id="" value="" placeholder="Search"/>
          <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
          <div className="product-details__content">
        <div className="product-details__extra-image">
            <img src={data.extraImageOne} alt="" />
            <img src={data.extraImageTwo} alt="" />
            <img src={data.extraImageThree} alt="" />
            <img src={data.extraImageFour} alt="" />
        </div>
                <div className="product-details__content__image">
                <img src={data.image} alt="" />
            <video muted="true" loop="true" autoplay="true" playsinline="true" src={data.video}></video>
                </div>
                <div className="product-details__items">
                    <span>{data.name}</span>
                    <span>{`$${data.price}${".00"}`}</span>
                    <p><span>Material:</span> <br /> {data.material}</p>
                    <p><span>Yaxşılıq üçün alış-veriş edin:</span> <br /> {data.goal}</p>
                    <p><span>Təsviri: <br /></span>{data.description}</p>
                    <div className="product-details__buttons">
            <button onClick={() => decreaseItem(data.id)} className="sell">
              -
            </button>

            {selectedProduct?.map((product) => (
              <button className="count" key={product.id}>
                {product ? product.count : 0} 
              </button>
            ))}

            <button onClick={() => increaseItem(data.id)} className="buy">
              +
            </button>
          <button onClick={()=>addProduct(data.id)}  className="add-button">Səbətə Əlavə Et</button>

          </div>
                </div>
          </div>
            </div>
        )
    }
    </section>
  )
}

export default ProductDetails