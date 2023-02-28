import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/Pages/CartContainer';
import Products from './components/Pages/Products';
import ProductDetail from './components/Pages/ProductDetail';
import { calculateTotals } from './redux/features/cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  },[items]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Products />}/>
        <Route path={`${process.env.PUBLIC_URL}/productDetail/:productId`} element={<ProductDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/cart`} element={<CartContainer />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
