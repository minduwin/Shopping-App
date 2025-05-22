import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Foot';
import Cart from './components/Cart';
import Wish from './components/Wish';
import Details from './components/Details';

function App() {

  // const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([])
  const [warning, setWarning] = useState(false);
  const [wishWarning, setWishWarning] = useState(false);

  const handleClick = (item) => {

    // Look for the product. If already on cart, show an alert
    const existingItem = cart.find((product) => item.id === product.id);

    if(existingItem) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return ;
    }

    // If the product isn't on cart, will be added and receive the quantity
    setCart([...cart, {...item, quantity: 1}])
  }

  const addToWishList = (item) => {

    // Look for the product. If already on cart, show an alert
    const existingItem = cart.find((product) => item.id === product.id);

    if(existingItem) {
      setWishWarning(true);
      setTimeout(() => {
        setWishWarning(false)
      }, 2000);
      return ;
    }

    // If the product isn't on cart, will be added and receive the quantity
    setWishList([...wishList, {...item, quantity: 1}])
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if(data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].quantity += d;

    if(tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;
    }
    setCart([...tempArr]);
  }

  return (
    <Router>
      <Navbar size={cart.length} wishLength={wishList.length}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Shop' element={<Shop handleClick={handleClick} addToWishList={addToWishList} />} />
        <Route path='/Details/:id' element={<Details handleClick={handleClick} />} />
        <Route path='Wish' element={<Wish wishList={wishList} setWishList={setWishList} />} />
        <Route path='Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
      </Routes>
      <Footer />
      {
          warning && <div className='warning'>Item is already added.</div>
      }
      {
          wishWarning && <div className='warning'>Item is already added.</div>
      }
    </Router>
  )
}

export default App
