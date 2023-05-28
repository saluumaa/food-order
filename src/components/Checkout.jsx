import React from 'react'

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <div className="checkout-left">
            <h3>Order Summary</h3>
            <div className="checkout-left-container">
              <div className="checkout-left-container-item">
                <p>Subtotal</p>
                <p>$ 100.00</p>
              </div>
              <div className="checkout-left-container-item">
                <p>Shipping</p>
                <p>$ 100.00</p>
              </div>
              <div className="checkout-left-container-item">
                <p>Tax</p>
                <p>$ 100.00</p>
              </div>
              <div className="checkout-left-container-item">
                <p>Total</p>
                <p>$ 100.00</p>
              </div>
              </div>
              </div>
              <div className="checkout-right">
                <h3>Shipping Address</h3>
                <div className="checkout-right-container">
                  <div className="checkout-right-container-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <h3>Payment Method</h3>
                  <div className="checkout-right-container">
                    <div className="checkout-right-container-item">
                      <label htmlFor="name">Name on Zaad</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="checkout-right-container-item">
                      <label htmlFor="Tel">Zaad Number</label>
                      <input type="tel" name="tel" id="tel" />
                    </div>
                    <div className="checkout-right-container-item">
                      <label htmlFor="address">Address</label>
                      <input type="text" name="address" id="address" />
                    </div>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                  </div>
                  </div>
                  </div>
    </div>         
    </div>

  )
}

export default Checkout