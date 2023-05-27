import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Meals from './components/Meals';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [exist , setExist] = useState(false);
  const [show, setShow] = useState(true);


  const handleAddCart = (item) => {
    const isPresent = cart.some((cartItem) => item.id === cartItem.id);
    if(isPresent){
      setExist(true);
      setTimeout(() => { 
        setExist(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <div className="App">
      <Navbar countItems={cart.length} 
      setShow={setShow}
      />
      {show ?
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals handleAddCart={handleAddCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>:
      <Cart cart={cart} setCart={setCart} setShow={setShow}/>
      }
      {exist && <div className='Existence'>Item already in cart</div>}
      <Footer />
    </div>
  );
}

export default App;
