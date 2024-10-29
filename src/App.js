// App.js (or Main.js) for React Router v6
import React from 'react';
import Footer from './footer'
import { Card } from 'react-bootstrap';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Promo from './Components/Promo';
import PotatoHead from './Components/PotatoHead';
import Demo from './Components/Demo';
import Navbar from './Components/NavBar';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Saapato from './Components/Saapato';
import Buttafly from './Components/Buttafly';


class App extends React.Component {

  render() {

    return (
      <Router>
        <Navbar />
        <div class="container" style={{ backgroundImage: "url(https://morphic-images.s3.us-east-2.amazonaws.com/30/Athleticon_Gradient_1800_2_95fdea7dc1.gif)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',}}>
        </div>        

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/potatohead" element={<PotatoHead />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/saapato" element={<Saapato />} />
          <Route path="/buttafly" element={<Buttafly />} />
          {/* Add other routes for different pages if needed */}
          {/* For example: */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Card>
            <Card.Footer>
              <p class="welcome">saysdont 2024 © </p>
            </Card.Footer>
          </Card>
      </Router>
      
    );
  }
}

export default App;