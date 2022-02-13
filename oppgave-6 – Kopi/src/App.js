import Form from './Components/Form';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import './styles.css';
import { useState } from 'react'



export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos)

  const removeTodo = (id) => {
    const oldTodos = [...todos]
    const todosLeft = oldTodos.filter((todos) => todos.id !== id);
    setTodos(todosLeft);

  }

 
  return (
    <>
    <Header />
    <main>
    <Form setTodos={setTodos} />
    <TodoList removeTodo={removeTodo} todos={todos} />
    </main>
    </>
  );
}


