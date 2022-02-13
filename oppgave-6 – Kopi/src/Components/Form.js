import Input from "./Input";
import { useState } from 'react'
import { v4 as uuid } from 'uuid';

export default function Form({setTodos}) {
    const [title, setTitle] = useState('')

    const [content, setContent] = useState('')

    const createId = () => Math.floor(Math.random(0, 1) * 1000);

    //Genere random id med uuid:
    //const unique_id = uuid();

    const handleContentChange =(event)=> {
        setContent(event.currentTarget.value)
    }
    const handleTitleChange =(event)=> {
        setTitle(event.currentTarget.value)
        console.log("title", event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        //Innstalere og brukte uuid som unik id
        const id = uuid();
        setTodos((prev) => [...prev, { id, title, content }]);
        }

    return (
      <section id="section1">
      <form onSubmit={onSubmit}>
          <Input
          name="title"
          id="title" 
          type="text" 
          label="Tittel:"  
          onChange={handleTitleChange}
          value={title}
          />
          <Input 
          name="content"
          id="content" 
          type="text" 
          label="Innhold:"  
          onChange={handleContentChange}
          value={content}
          />
        <button id="formbutton" type="submit" value="submit">Add</button>
       

      </form>
  </section>
    )
  }