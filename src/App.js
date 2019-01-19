import React, { Component } from 'react';
import {BrowserRouter , Route , Link} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About"
import Books from "./Books"
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/books">Books</Link>
        </li>
      </ul>
      <div className="route">
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/books" component = {Books} />
      </div>
      <footer>
        &copy; Developed By Rakib Uddin
      </footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
