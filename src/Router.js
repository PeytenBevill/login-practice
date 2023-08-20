import React, {useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
function checkAuth() {
    let cookies = cookie.parse(document.cookie);
    console.log(cookies);
    return cookies.isLoggedIn === 'true' ? true : false;
  }
// Check the cookies for a cookie called "loggedIn"
function ProtectedRoute(props){
    const {component: Component, ...rest} = props
    return checkAuth() === true ? <Component {...rest}/> : <Navigate to='/login' />
}

// Write ProtectedRoute function here


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About} />}/>
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />}/>
        </Routes>
    );
};

export default Router;