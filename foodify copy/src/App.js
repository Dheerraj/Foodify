import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './screens/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import About from './screens/About.js';
import MyOrder from './screens/MyOrder.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './componets/ContextReducer.js';
function App() {
  return (
    <CartProvider> 
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/createUser" element={<Signup/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/MyOrder" element={<MyOrder/>} />
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
