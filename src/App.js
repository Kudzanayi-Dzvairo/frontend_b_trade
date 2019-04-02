import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer'
import Footer from './Components/Footer'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div>
      <Header />

        <MainContainer />

        <Footer />
      </div>
    );
  }
}

export default App;
