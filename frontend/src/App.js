import React,{useState, useEffect} from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/shared/Header';
import Main from './component/pages/Main';
import Product from './component/pages/Product'
import css from './app.css'
function App() {
  
  const[products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
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
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
