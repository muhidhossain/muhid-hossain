import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import LoveToDo from './Components/LoveToDo/LoveToDo';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import NotFound from './Components/NotFound/NotFound';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="my-portfolio">
      <Router>
        {/* Scroll to top on changing route */}
        <ScrollTop />

        {/* scroll to top by clicking on bottom right corner button */}
        <ScrollToTop
          smooth
          color="black"
          style={{
            outline: 'none',
            backgroundColor: 'aqua',
            height: '30px',
            width: '30px',
            fontWeight: '800',
          }}
        />

        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <LoveToDo></LoveToDo>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <div style={{ paddingTop: '100px' }}>
              <Navbar></Navbar>
              <About></About>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="/mySkills">
            <div style={{ paddingTop: '100px' }}>
              <Navbar></Navbar>
              <Skills></Skills>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="/loveToDo">
            <div style={{ paddingTop: '100px' }}>
              <Navbar></Navbar>
              <LoveToDo></LoveToDo>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="/portfolio">
            <div style={{ paddingTop: '100px' }}>
              <Navbar></Navbar>
              <Portfolio></Portfolio>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="/contact">
            <div style={{ paddingTop: '130px' }}>
              <Navbar></Navbar>
              <Contact></Contact>
              <Footer></Footer>
            </div>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
