import React from 'react'
import { AiOutlineShoppingCart, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaTelegram, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({
  countItems,
  setShow
}) => {
  return (
    <>
		<div className="social-media">
			<ul className="call-order">
				<li>Call 
				<span> <FaPhone /> </span> 
				<a href="tel:+253634444444" style={{ color: 'white'}}>Us Now</a>
				</li>
			</ul>
			<ul className="social-icons">
				<li><FaFacebookF /></li>
				<li><FaInstagram /></li>
				<li><FaTelegram /></li>
				<li><AiOutlineTwitter /></li>
			</ul>
		</div>
    <header>
        <p style={{paddingLeft: '3rem', fontSize: '1.5rem'}}
        onClick={() => setShow(true)}
        >Xared Restaurent</p>
        <nav 
        onClick={() => setShow(true)}
        >
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li> <Link to="/meals">Meals</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
   
        {/* <h1>Best Food Waiting For Your Belly</h1> */}
        <button className="shopping-cart"
        onClick={() => setShow(false)}
        >
				<span className="item-count">{countItems}</span>
            <AiOutlineShoppingCart style={{ fontSize: '45px', color: 'white' }}/>
        </button>
        {/* <h1>Order Now</h1>
        <p>Get your food in 30 minutes</p> */}
		</header>
    </>
  );
};

export default Navbar