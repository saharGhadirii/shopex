import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import  Home  from './pages/Home/Home';
import './App.css';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import {Cart} from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';
import { Products } from './pages/Products/Products';
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";
function App() {
  return (
      <AuthProvider>
    <CartProvider>
    <Router>
       <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart"  element={<Cart />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/register"element={<Register />}/>
         <Route path="/profile" element={<Profile />}/>
         <Route path="/checkout" element={<Checkout />}/>
         <Route path="/about" element={<About />} />
      </Routes>
       <Footer/>
    </Router>
    </CartProvider>
       </AuthProvider>
  );
}

export default App;