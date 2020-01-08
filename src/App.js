import React, {Component} from 'react';
import './assets/style/App.css';
import './assets/style/Common.css';
import 'video.js/dist/video-js.min.css';
import Navbar from './components/navbar';
import Main from './components/main';
import BackToTop from './components/backtotop';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar/>
        <Main/>
        <BackToTop/>
        <Footer/>
      </div>
    );
  }
}

export default App;