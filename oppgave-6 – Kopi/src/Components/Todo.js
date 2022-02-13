


export default function Todo({ id, title, content, removeTodo}) {
    return (
      <article>
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <button 
                          className="remove" 
                          type="button" 
                          onClick={() => removeTodo(id)}>
                      Complete
                  </button>
              </article>
    )
  }
  