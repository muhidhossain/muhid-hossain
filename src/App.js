import React from 'react';
import './App.css';
import Intro from './Components/Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import LoveToDo from './Components/LoveToDo/LoveToDo';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='my-portfolio'>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <LoveToDo></LoveToDo>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
