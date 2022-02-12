export default function Todo({ id, title, content, todo, removeTodo }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="remove" type="button" onClick={() => removeTodo(id)}>
        Utført
      </button>
    </article>
  );
}
