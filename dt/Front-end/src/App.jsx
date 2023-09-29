import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './book.css'
import HomePage from './components/homePage'
import RegistrationPage from "./components/registrationPage";
import LoginPage from "./components/loginPage"
import DetailPage from './components/detailPage';
import CartPage from './components/cartPage';


export const ProductContext = createContext(null);




function App() {

  const [book, setBook] = useState([]);
  const [cart,setCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'http://127.0.0.1:3000/api/v1/product/all';

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBook(data.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
 
 

  return (
    <ProductContext.Provider value={{ book, isLoading, error,cart,setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/detail/:id" element={<DetailPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App
