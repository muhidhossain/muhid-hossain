import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='my-portfolio'>
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
