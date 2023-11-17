import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
function App() {

  return (
    <div>
      <div className="oval">
      </div>
      <div className='content'>
        <ProductList  />
        <Cart />
      </div>
    </div>
  );
}

export default App;
