import React,{useState, useEffect} from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/shared/Header';
import Footer from './component/shared/Footer';
import Main from './component/pages/Main';
import Product from './component/pages/Product'
import Register from './component/pages/Register'
import Login from './component/pages/Login'
import css from './app.css'
function App() {
  
  const[products, setProducts] = useState([]);
    //using fetch to get data 
    useEffect(()=>{
        fetch("https://mern-assignment-gyou.onrender.com/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main products={products}/>}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
