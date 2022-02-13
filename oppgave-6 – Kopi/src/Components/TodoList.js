import Todo from "./Todo";




export default function TodoList({todos, removeTodo}) {
    return (
  <section id="todo">
      {todos && todos.length > 0 ? todos.map(todo => 
      
            <Todo 
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              removeTodo={removeTodo}

               />) : 
              <p>Ingen todos</p>}

          </section>
    );
  }