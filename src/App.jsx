import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/Header";

import Itemlist from "./components/itemlist/Itemlist";
import { Routes ,Route } from "react-router-dom";
import ProductDetails from "./components/productdetails/ProductDetails";
import SearchItem from "./components/searchitem/SearchItem";
import Cart from "./components/cart/Cart";
import { Items } from "./components/Data";
import { useState } from "react";
import Navigation from "./components/menu/Navigation";
import MenCloting from "./components/MenCloting";
import Jwellery from "./components/Jwellery";
import Electronices from "./components/Electronices";
import WomenClothing from "./components/WomenClothing";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

function App() {
  const [data , setData] = useState([...Items])
 

  
  return (
    <>
      <Header />
      <Navigation />
      
      <Banner/>
      <Routes>
        <Route path="/" element={ <Itemlist Items={data}/>}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/search/:term" element={<SearchItem/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/menclothing/" element={<MenCloting />}></Route>
        <Route path="/Jwellery" element={<Jwellery/>}/>
        <Route path="/eletronices" element={<Electronices/>}/>
        <Route path="/womenclothing" element={<WomenClothing/>}/>
      </Routes>
      <Footer/>
     
      
      
    </>
  );
}

export default App;
