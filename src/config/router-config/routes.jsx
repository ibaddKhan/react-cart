import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home/home";
import Cart from "../../screens/cart/cart";
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="cart" element={<Cart />} />



            </Routes></BrowserRouter>
    )
}
export default Routers;