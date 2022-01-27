import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import BannerHome from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import Client from './Components/Client/Client';


function App() {
  return (
    <>
      <Header />
      <BannerHome />
      <Features />
      <Client />
      <Routes>
        <Route exact path="/" component={Home} /> 
      </Routes>
      
    </>
  );
}

export default App;
