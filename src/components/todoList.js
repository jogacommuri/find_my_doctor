import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Col} from 'react-bootstrap';
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo'
import Rater from 'react-rater';
import Male from '../assets/male_doctor.png';
import Female from '../assets/female_doctor.jpg';
import 'react-rater/lib/react-rater.css';

const TodoItem = ({id, name, area, img, specialty, isComplete, contactNo, description, review, gender,toggleTodo, deleteTodo})=>(
	<li> 
		<Col xs={12} sm={12} md={4} lg={4} className="smallPod">
			<span className="delete-item">
				<button onClick={() => deleteTodo(id)}> X </button>
			</span>
			<input type ="checkbox" 
				checked={isComplete} 
				onChange={() => toggleTodo(id)}/> 
			<Col xs={4} sm={4} md={4} lg={4}>
				{({gender}.gender === "Male") ? <Image src={Male} rounded/> : <Image src={Female} rounded/>}
				
			</Col>
			<Col xs={8}  sm={8} md={8} lg={8}>
				<span>
					<p>{(isComplete) ? "Accepting New Patients" : "Not Accepting new Patients"}</p>
					<p>Name: {name}</p>
					<p>Area: {area}</p>
					<p>Specialty: {specialty}</p>
					<p>{gender}</p>
					<a>{contactNo}</a>
				</span>
				<br/>
				Rating: ({review})<Rater interactive={false} rating={review} />
			</Col>
			<Col xs={12} sm={12} md={12} lg={12} className="description">
				<span>
					<p>About Me: </p>
					<p>{description}</p>
				</span>
				
			</Col>
		</Col>
	</li>
	
)
class TodoList extends Component{
	componentDidMount(){
		this.props.fetchTodos()
	}
	render(){
		return(
			<div className="Todo-List">
		      <ul>
		        {this.props.todos.map( todo => 
		        	<TodoItem key={todo.id} 
		        	toggleTodo={this.props.toggleTodo} 
		        	deleteTodo={this.props.deleteTodo} 
		        	{...todo} />)}
		       
		      </ul>
		    </div>
		)
	}
}

export default connect(
	(state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
	{fetchTodos, toggleTodo, deleteTodo}
)(TodoList)