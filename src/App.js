import React, { Component } from 'react';
//import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Message from './components/Message'
//import {bindActionCreators} from 'redux'
import Footer from './components/Footer'


class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Todo App </h2>
        </div>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
 

export default App;
