import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav/>
          {routes}
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
