import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import Detail from './components/Detail'
import './App.css';
import axios from 'axios';


function App() {
  const year = new Date().getFullYear();

 
  return (
    <div className='bg-dark'>
    <NavBar year={year} />
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} ></Route>
        <Route path="/detail/" element={<Detail />} ></Route>
      </Routes>
    </Router>
     <Footer/>
    </div>
  );
}

export default App;
