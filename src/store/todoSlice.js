import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 'd231d', text: 'Learn Redux', isCompleted: false },
            { id: 'fw332', text: 'Learn React', isCompleted: true },
        ],
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
        toggleIsCompleted(state, action) {
            const current = state.todos.find((item) => item.id === action.payload.id);
            current.isCompleted = !current.isCompleted;
        },
    },
});

const { actions, reducer } = todoSlice;

export const { addTodo, removeTodo, toggleIsCompleted } = actions;
export default reducer;
