import React, { Component } from 'react';
import './css/App.css';

import ScrollableAnchor from 'react-scrollable-anchor'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import DNA from './components/DNA'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <ScrollableAnchor id={'same-DNA'}>
          <div>
            <DNA />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'work'}>
          <div>
            <Work />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div>
            <Contact />
          </div>
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
