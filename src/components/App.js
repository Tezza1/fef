// src/components/App.js

import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;