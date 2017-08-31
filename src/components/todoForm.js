import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {updateCurrent, saveTodo} from'../reducers/todo'
import {Modal, Panel, Well, Row, Col, Button} from 'react-bootstrap';

class TodoForm extends Component{
	constructor(){
		super();
		this.state ={
			showModal: false
		}
	}

	handleInputChange = (evt) => {
		const val = evt.target.value
		this.props.updateCurrent(val)

	}

	handleSubmit = (evt) =>{
		evt.preventDefault()
		console.log(evt.target.value)
		this.props.saveTodo(this.props.currentTodo)
	}

	open(){
		this.setState({showModal:true})
	}
	close(){
		this.setState({showModal:false})
	}
	render() {

		const {currentTodo} = this.props
		
		return(
			<Well>
				<Panel header="Add a new Doctor" bsStyle="primary">
					<Row>
						<Col xs={12} sm={12} md={12} lg={12} >
							<Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small"> Proceed To Add </Button>
						</Col>
					</Row>
					<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
			          <Modal.Header closeButton>
			            <Modal.Title>Enter Details </Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
			          	
			          </Modal.Body>
			          <Modal.Footer>
			          	<Col xs={6}>
			          		<h6> total $: {this.props.totalAmount}</h6>
			          	</Col>
			            <Button onClick={this.close.bind(this)}>Close</Button>
			          </Modal.Footer>
			        </Modal>
			    </Panel>
				<form onSubmit={this.handleSubmit}>
					<input type="text" 
					onChange = {this.handleInputChange}
					value={currentTodo} />
				</form>
			</Well>
		)
	}
}

export default connect(
	(state) => ({currentTodo: state.todo.currentTodo}),
	{updateCurrent, saveTodo}
)(TodoForm)