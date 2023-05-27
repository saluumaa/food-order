import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa';
import beef from '../assets/beefCooked.jpeg'
import Burger from '../assets/ChickenBurger.jpg'
import pizza from '../assets/ChickenPizza.jpg'
import cupcake from '../assets/CupCake.jpg'
import cake from '../assets/ChocolateCake.jpg'


const FrontMeals = () => {
  const homeData = [
  {
    id: 1,
    image:  beef ,
    description: 'click to search your favorite beef meal and choose between different cooked beef',
  },
  {
    id: 2,
    image: Burger ,
    description: 'click to search your favorite chicken meal and choose between different kind of burgers',
  },
  {
    id: 3,
    image: pizza ,
    description: 'welcome to our main meal and click to search your favorite Pizza that we offer',
  },
  {
    id: 4,
    image:  cupcake ,
    description: 'click to search your favorite cupcake and choose between different kinds and test it',
  },
  {
    id: 1,
    image:  cake ,
    description: 'click to search your favorite kind of cake and enjoy it',
  }
]
  return (
    <div className='home-meals-wrapper'>
      {homeData.map((item) => (
        <Link to='/meals' className='home-meals' key={item.id}>
          <img src={item.image} alt={item.description} />
          <p>{item.description}</p>
          {/* <FaArrowCircleRight style={{ fontSize: '30px' }} className="arrow-right" /> */}
        </Link>
      ))}
    </div>
  )
}

export default FrontMeals