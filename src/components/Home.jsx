import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import beef from '../assets/beefCooked.jpeg'
import Burger from '../assets/ChickenBurger.jpg'
import pizza from '../assets/ChickenPizza.jpg'
import cupcake from '../assets/CupCake.jpg'
import cake from '../assets/ChocolateCake.jpg'
import pizzabackground from '../assets/top-view-pizza-with-red-pepper-tomato-sauce-with-copy-space.jpg'
import FrontMeals from './FrontMeals';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
  <>
  <div className="image-slide-wrapper">
    <Slider {...settings}>
      <div>
        <img src={pizza} alt="Image 1" />
      </div>
      <div>
        <img src={cake} alt="Image 2" />
      </div>
      <div>
        <img src={beef} alt="Image 3" />
      </div>
      <div>
        <img src={Burger} alt="Image 3" />
      </div>
      <div>
        <img src={pizzabackground} alt="Image 3" />
      </div>
      <div>
        <img src={cupcake} alt="Image 3" />
      </div>
    </Slider>
  </div>
  <div>
  <FrontMeals />
  </div>
  </>
  );
};

export default Home