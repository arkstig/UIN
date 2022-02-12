import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const removeTodo = (id) => {
    const oldTodos = [...todos];
    const todosLeft = oldTodos.filter((todo) => todo.id !== id);
    setTodos(todosLeft);
  };

  return (
    <>
      <Header />
      <main>
        <Form setTodos={setTodos} />
        <h4>Mine Todos</h4>
        <TodoList  removeTodo={removeTodo} todos={todos} />
      </main>
    </>
  );
}
