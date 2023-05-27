import React from 'react'

const MealCards = ({
    item,
    handleAddCart
}) => {
const {title, category, price, img, desc} = item
  return (
    <div className='meal-card'>
        <div className='meal-card-img'>
            <img src={img} alt={title} />
        </div>
        <div className='meal-card-info'>
            <div className='meal-card-info-title'>
                <h3>{title}</h3>
                <h3>${price}</h3>
            </div>
            <div className='meal-card-info-text'>
                <p>{desc}</p>
            </div>
            <div className='meal-card-info-category'>
                <h4>Category: {category}</h4>
            </div>
        </div>
        <div className='meal-card-btn'>
            <button
                className='btn'
                onClick={() => handleAddCart(item)}
            >
                Add to Cart
            </button>
        </div>
    </div>

  )
}

export default MealCards