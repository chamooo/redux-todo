import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 'd231d', text: 'Learn Redux', isCompleted: false },
            { id: 'fw332', text: 'Learn React', isCompleted: true },
            { id: 'glf24', text: 'Brush my teeth', isCompleted: false },
        ],
        filterValue: { name: 'all' },
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                isCompleted: false,
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((item) => item.id !== action.payload.id);
        },
        editTodo(state, action) {
            const current = state.todos.find((item) => item.id === action.payload._id);
            current.text = action.payload.value;
        },
        toggleIsCompleted(state, action) {
            const current = state.todos.find((item) => item.id === action.payload.id);
            current.isCompleted = !current.isCompleted;
        },
        sortTodo(state, action) {
            state.filterValue = action.payload;
        },
    },
});

const { actions, reducer } = todoSlice;

export const { addTodo, removeTodo, editTodo, toggleIsCompleted, sortTodo, toggleAlert } = actions;
export default reducer;
