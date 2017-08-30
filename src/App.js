import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Well, Col, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Message from './components/Message'
//import {bindActionCreators} from 'redux'
import Filter from './components/Filter'


class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Find My Doctor App </h2>
        </div>
        <Router>
          <Well>
            <Row>
              <Col xs={12} sm={12} md={10} mdOffset={2} lg={12} lgOffset={2}>
                <div className="Todo-App">
                  <Message />
                  <TodoForm />
                  <Filter />
                  <Route path='/:filter?' render={({match}) => (
                      <TodoList filter={match.params.filter} />
                    )} />
                </div>
              </Col>
            </Row>
          </Well>
        </Router>
      </div>
    );
  }
}
 

export default App;
