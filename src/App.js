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
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.my_portfolio}>
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
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Portfolio />
            <LoveToDo />
            <Contact />
            <Footer />
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
