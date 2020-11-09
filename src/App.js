import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import FigureWrapper from "./components/FigureWrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <FigureWrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </FigureWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
