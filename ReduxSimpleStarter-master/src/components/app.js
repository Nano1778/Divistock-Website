import React, { Component } from 'react';
import NavBar from './nav_bar';
import About from './about';


export default class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <About/>
        </div>
    );
  }
}
