export default function Button({ removeTodo, todo }) {
    return <button 
    className="remove"
        type="button"
        onClick={() => removeTodo(todo.id)}
    id="complete">Complete</button>;
  }