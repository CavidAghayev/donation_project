import React from 'react'

function Pay() {
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
            <label htmlFor="name">Ad</label><br />
            <input type="text" name="" id="name" /><br />
            <label htmlFor="surname">Soyad</label>
            <input type="text" name="" id="" />
            <label htmlFor="email">Email Adres</label>
            <input type="email" name="" id="email" />
            <label htmlFor="number"></label>
            <input type="number" name="" id="number" />
            <label htmlFor="street">Küçə</label>
            <input type="text" name="" id="street" />
            <label htmlFor="country">Ölkə</label>
            <input type="text" name="" id="country" />
            <label htmlFor="city">Şəhər</label>
            <input type="text" name="" id="city" />
        </div>
    </div>
    <div className="pay__product-cart">

    </div>
    </div>
</section>
    )
}

export default Pay