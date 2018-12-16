// src/components/App.js

import React from 'react';
import Navbar from './Navbar';
// import Banner from './Banner';
import Overview from './Overview';
// import HTMLComponents from './HTMLcomponents';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Banner />*/}
        {/*<HTMLComponents />*/}
        <Overview />
      </div>
    );
  }
}

export default App;