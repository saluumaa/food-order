import React, {useState, useEffect} from 'react'
import {
  FaTimes
} from 'react-icons/fa'

const Cart = (
{cart,
setCart,
setShow,
setCheck
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePrice = ()=> {
    let total = 0
    cart.map((item)=> {
      total += item.amount * item.price
    })
    setTotalPrice(total.toFixed(2))
  }

  const handleCount = (id, type) => {
    const newCart = [...cart]
    const index = newCart.findIndex((item) => item.id === id)
    if (type === '+') {
      newCart[index].amount += 1
    } else if (type === '-' && newCart[index].amount > 1) {
      newCart[index].amount -= 1
    }
    setCart(newCart)
  }

 

  useEffect(()=> {
    handlePrice()
  }, [cart, handlePrice])

  return (
    <>
    <div className='close-btn'>
        <button
          onClick={() => setShow(true)}
        >
          <FaTimes />
        </button>
      </div>
    <aside className='cart-wrapper'>
      {cart?.map((item) => (
        <div key={item.id} class="cart-container">
          <img src={item.img} alt={item.title} />
          <div>
          <h3>{item.title}</h3>
          <h3 style={{backgroundColor: 'blue', color: 'white', width: '50%' }}>${item.price}</h3>
        </div>
         <div className="up-down-btn">
          <button onClick={() => handleCount(item.id, '+')}>+</button>
          <button>{item.amount}</button>
          <button onClick={() => handleCount(item.id, '-')}>-</button>
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
    </aside>

    <div className="cart-footer">
        <span>The total price of your food is </span>
      <h3> $- {totalPrice} </h3>
      <button className="btn"
      onClick={()=> {setCheck(true)}}
      >Checkout</button>
    </div>
    </>
  )
}

export default Cart