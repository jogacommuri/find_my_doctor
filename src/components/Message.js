import React from 'react'
import {connect} from 'react-redux';

const message =({message}) => (
	message 
		? <span className='message'>{message}</span>
		: null
)

export default connect(
	(state) => ({message: state.msg})
)(message);