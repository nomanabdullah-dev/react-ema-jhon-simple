import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>} />
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route exact path='/product/:productKey' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
