import reducer from './todo'

describe('Todo Reducer', ()=> {
	test('return a state object', () => {
		const result = reducer(undefined, {type:'ANYTHING'})
		expect(result).toBeDefined()
	})
	test('adds a todo', () => {
		const startState = {
			todos:[
				{id: 1,name:'CreateStatic UI',isComplete: true},
				{id: 2,name:"Create Initial State", isComplete: true},
				{id: 3,name:"Render based on state", isComplete: false}
			]
		}
		const expectedState ={
			todos:[
				{id: 1,name:'CreateStatic UI',isComplete: true},
				{id: 2,name:"Create Initial State", isComplete: true},
				{id: 3,name:"Render based on state", isComplete: false},
				{id: 4,name:"Added todo", isComplete: false}
			]
		}
		const action = {type:'TODO_ADD', payload: {id: 4,name:"Added todo", isComplete: false}}
		const result = reducer(startState, action)
		expect(result).toEqual(expectedState)
	})
})