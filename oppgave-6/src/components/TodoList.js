import Todo from "./Todo";

export default function TodoList({ todos, removeTodo }) {
  return (
    <section className="todo">

      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            id={todo.id}
            title={todo.title}
            content={todo.content}
            removeTodo={removeTodo}
            key={todo.id}
          />
        ))
      ) : (
        <p className="ingen">Du har ingenting mer å gjøre. Legg til en ny todo over, og få ting gjort!</p>
      )}
    </section>
  );
}
