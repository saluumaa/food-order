import React from 'react'
import {
  FaTimes
} from 'react-icons/fa'

const Cart = (
{cart,
setCart,
setShow
}) => {
  return (
    <>
    <div style={{marginTop: '8rem'}}>
        <button
          onClick={() => setShow(true)}
        >
          <FaTimes />
        </button>
      </div>
    <div className='cart-wrapper'>
      {cart.map((item) => (
        <div key={item.id}>
          <div>
          <h3>{item.title}</h3>
          <h3>${item.price}</h3>
          <img src={item.img} alt={item.title} />
        </div>
        <div>
          <button
            className='btn'
            onClick={() => setCart(cart.filter((cartItem) => cartItem.id !== item.id))}
          >
            Remove
          </button>
          </div>
        </div>
        ))};

    </div>
    </>
  )
}

export default Cart