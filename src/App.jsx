import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  function addTodo(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: crypto.randomUUID(), text: input, completed: false }])
    setInput('')
  }
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <>
      <h1>ToDoList:</h1>
      <h2>Tasks:</h2>
      <form onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map(todo => <li key={todo.id} className="todo-item">{todo.text}<button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button></li>)}
      </ul >
    </>
  )
}

export default App