import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
}from "react-router-dom";

import LoginScreen from './LoginScreen/LoginScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
               <Route path="/" element={<LoginScreen/>} />
               <Route path="/register" element={<RegisterScreen/>} />
               <Route path="/home" element={<HomeScreen/>} />
            </Routes>
        </Router>
    );
}