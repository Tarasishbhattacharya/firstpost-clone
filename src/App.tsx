import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import {Singlepage} from "./components/Singlepage"
import {Home} from "./components/Home"
import { India } from './components/India';
import { Health } from './components/Health';
import { World } from './components/World';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      {/* <Footer/> */}
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/india" element={<India/>}/>
       <Route path="/health" element={<Health/>}/>
       <Route path="/world" element={<World/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
