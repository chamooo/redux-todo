import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
        { id: '12dwqd2', text: 'Todo 1', isCompleted: false },
        { id: '453fed2', text: 'Todo 2', isCompleted: true },
    ]);
    const [textInput, setTextInput] = useState('');

    const addTodo = () => {
        if (textInput.trim().length) {
            setTodos((prev) => [
                ...prev,
                {
                    id: new Date().toISOString(),
                    text: textInput,
                    isCompleted: false,
                },
            ]);
            setTextInput('');
        }
    };

    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    const toggleIsCompleted = (id) => {
        const copy = [...todos];
        const current = copy.find((item) => item.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    };

    return (
        <div className="App">
            <Form textInput={textInput} setTextInput={setTextInput} addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleIsCompleted={toggleIsCompleted}/>
        </div>
    );
}

export default App;
