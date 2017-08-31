import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, Col} from 'react-bootstrap';
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo'
import Rater from 'react-rater';
import Male from '../assets/male_doctor.png';
import Female from '../assets/female_doctor.jpg';
import 'react-rater/lib/react-rater.css';

const TodoItem = ({id, name, area, img, specialty, address, isComplete, contactNo, description, review, gender, toggleTodo, deleteTodo})=>(
	<li> 
		<Col xs={12} sm={12} md={5} lg={5} className="smallPod">
			<span className="delete-item">
				<button onClick={() => deleteTodo(id)}> REMOVE </button>
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
					<p>Address : {address} </p>
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
	constructor(props) {
	    super(props);
	    this.state = {
	       searchTerm: '',
	       FinalSearchTerm: ''
	    };
	  }

	componentDidMount(){
		this.props.fetchTodos()
	}

	handleSearch = (evt) => {
		evt.preventDefault()
		//console.log(evt.target.value)
		this.setState({searchTerm: evt.target.value})
		console.log(this.state.searchTerm)
	}
	handleSubmit = (evt) =>{
		evt.preventDefault()
		this.setState({FinalSearchTerm: this.state.searchTerm})
	}
	render(){
		return(

			<div className="Todo-List">
				<Col xs={2} sm={2} md={2} lg={2}>
					<span>
						Search :
					</span>
					<form onSubmit={this.handleSubmit}>
						<input type ="text"  onChange={this.handleSearch}/> 
					</form>
				</Col>
				<Col xs={10} sm={10} md={10} lg={10}>
				      <ul>
				        {this.props.todos
				        	.filter((val) => 	this.state.FinalSearchTerm && (val.specialty || val.area || val.gender || val.reviews || val.address)
								? (((val.specialty.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 ) ||
									(val.area.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 )||
									(val.name.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 )||
									(val.gender.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 ) ||
									(val.review.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 ) ||
									(val.address.toString().toLowerCase().indexOf((this.state.FinalSearchTerm).toLowerCase()) > -1 )
									)
									? true 
									: false)
								:  true)
				        	.map( todo => 
					        	<TodoItem key={todo.id} 
					        	toggleTodo={this.props.toggleTodo} 
					        	deleteTodo={this.props.deleteTodo} 
					        	{...todo} />)}
				       
				      </ul>
			     </Col>
		    </div>
		)
	}
}

export default connect(
	(state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
	{fetchTodos, toggleTodo, deleteTodo}
)(TodoList)