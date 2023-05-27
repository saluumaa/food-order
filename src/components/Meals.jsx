import React from 'react'
import mealList from './data'
import MealCards from './MealCards'

const Meals = ({handleAddCart}) => {
  return (
      <section className='meals-container'>
        {mealList.map((item) => (
          <MealCards key={item.id} 
          item={item} 
          handleAddCart={handleAddCart}
          />
        ))};
      </section>
  )
}

export default Meals