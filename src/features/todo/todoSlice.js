import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, text: 'Learn React', completed: false}],
}

export const todoSliceReducer = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        updateTodo: (state, action) => {
            const {id,text} = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if(todo){
                if(text !== undefined) todo.text = text
            }
        },
        toggleComplete: (state,action) => {
            const id = action.payload;
            const todo = state.todos.find(todo => todo.id === id);

            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSliceReducer.actions

export default todoSliceReducer.reducer