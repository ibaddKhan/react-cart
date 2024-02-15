import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home/home";
import Cart from "../../screens/cart/cart";
import Card from "../../components/card";
import Navbar from "../../components/navbar";


const Routers = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
            </Routes></BrowserRouter>
    )
}
export default Routers;