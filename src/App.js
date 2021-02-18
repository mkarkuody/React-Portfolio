import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact";
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style/Main.css"
import Navbar from "./components/Navbar";


function App() {
  return (
    
    <Router>
        <div>
          <Navbar />
          <Sidebar />
          <Route exact path="/Portfolio"component={Portfolio} />
          <Route exact path="/" component={About} />
          <Route exact path="/Contact" component={Contact} /> 
          <Footer/>
          
        </div>
        </Router>
    
  );
}

export default App;
