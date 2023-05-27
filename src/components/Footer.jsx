import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className="food-footer">
        <div className="footer-container">
            <div className="row">
                <div className="food col-1">
                    <h3>Food</h3>
                    <p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</p>
            </div>
            <div className="open col-1">
                <h3>Opening Hours</h3>
                <p>Friday: 2:00PM - 12PM</p>
                <p>Sat - Thurs: 8AM - 12PM</p>
            </div>

            <div className="links col-1">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="follow col-1">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><FaTwitter /></a> </li>
                    <li><a href="#"><FaInstagram /></a> </li>
                    <li><a href="#"><FaYoutube /> </a></li>
                </ul>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer