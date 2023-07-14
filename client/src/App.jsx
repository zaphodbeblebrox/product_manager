import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/Header';
import CreateProduct from './components/CreateProduct';
import DisplayAllProducts from './components/DisplayAllProducts';
import DisplayOneProduct from './components/DisplayOneProduct';

function App() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/")
      .then( res => setAllProducts(res.data.products))
      .catch( err => console.log(err));
  }, [])


  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DisplayAllProducts allProducts={allProducts}/>}/>
        <Route path="/create/product" element={<CreateProduct allProducts={allProducts} setAllProducts={setAllProducts}/>} />
        <Route path="/product/:id" element={<DisplayOneProduct allProducts={allProducts}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
