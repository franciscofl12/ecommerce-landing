import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from './partials/Header';
import FeatureProduct from './partials/FeatureProduct';
import ProductList from './partials/ProductList';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="container mx-auto px-12">
      <Header cartItems={cartItems} onClearCart={handleClearCart}/>
      <FeatureProduct/>
      <ProductList onAddToCart={handleAddToCart}/>
    </main>
  )
}

export default App;
