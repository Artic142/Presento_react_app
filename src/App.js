//app.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  return (


    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<Contact />}></Route>       
        </Routes>


      </Router>

      <Footer />
    </>
  )
}

export default App;