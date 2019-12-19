import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/helper/Navbar';
import Footer from './components/helper/Footer';

import Landing from './components/screen/Landing';
import Movie from './components/screen/Movie';

import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
