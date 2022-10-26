import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesApi } from '../../Service/apiService'
function Pay() {
    let {id} = useParams();
    const { data } = servicesApi.useGetProductDetailsQuery(id);
  return (
<section>
    <div>
        <div className="pay__cart-checkout">
            <span>Yoxla</span>
            <span>Məhsulu yoxla</span>
        </div>
    </div>
    <div className="pay__content">
    <div className="pay__shipping-address">
        <h3>Çatdırılma Ünvanı</h3>
        <div className="pay__inputs">
            <form action="">
            <label htmlFor="name">Ad*</label>
            <input type="text" name="" id="name" />
            <label htmlFor="surname">Soyad*</label>
            <input type="text" name="" id="" />
            <label htmlFor="email">Email Adres*</label>
            <input type="email" name="" id="email" />
            <label htmlFor="number">Nömrə*</label>
            <input type="number" name="" id="number" />
            <label htmlFor="street">Küçə*</label>
            <input type="text" name="" id="street" />
            <label htmlFor="country">Ölkə*</label>
            <input type="text" name="" id="country" />
            <label htmlFor="city">Şəhər*</label>
            <input type="text" name="" id="city" />
            </form>
        </div>
        <div className="payment-method">
            <h3>Ödəniş üsulu</h3>
            <div className="payment-method__inputs">
                <form action="">
                <label htmlFor="firstName">Kart sahibinin adı*</label>
                <input type="text" name="" id="firstName" />
                <label htmlFor="lastName">Kart sahibinin soyadı*</label>
                <input type="text" name="" id="lastName" />
                <label htmlFor="cardNumber">Kart nömrəsi*</label>
                <input type="number" name="" id="cardNumber" />
                <label htmlFor="expiryDate">Son istifadə tarixi*</label>
                <input type="text" name="" id="expryDate" />
                <label htmlFor="cvv">Cvv/Cvv2*</label>
                <input type="text" name="" id="cvv" />
                </form>
                <div className='btn pay-btn'>PLACE ORDER</div>

            </div>
        </div>
    </div>
    <div className="pay__product-cart">
<div className="order-summary">
<h3>Sifariş</h3>
<div className="order-summary__content">
<div className="order-summary__content__image">
{
    data && (

        <img src={data.image} alt="" />
    )
}

</div>
</div>
</div>
    </div>
    </div>
</section>
    )
}

export default Pay