import React, { Component } from 'react';
//import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
// import fetchJsonp from 'fetch-jsonp';
//import { Button, Form, FormGroup, FormControl, Modal, Col} from 'react-bootstrap/lib';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Todo App </h2>
        </div>
        <div className="Todo-App">
          <TodoForm currentTodo ={this.props.currentTodo} changeCurrent={this.props.changeCurrent} />
          <TodoList todos={this.props.todos} />
        </div>
        
      </div>
    )
  }
}

export default App;
