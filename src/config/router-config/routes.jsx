import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../screens/Login/login";
import Signup from "../../screens/signup/signup";
const Routers = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<Signup />} />



            </Routes></BrowserRouter>
    )
}
export default Routers;