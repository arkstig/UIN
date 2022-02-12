import { useState } from "react";
import Input from "./Input";

export default function Form({setTodos}) {
    const [title, setTitle] = useState('')
  
    const [content, setContent] = useState('')
  
    const createId = () => Math.floor(Math.random(0, 1) * 1000);

    const handleChangeTitle = (event) => {
      console.log('changed title')
      setTitle(event.currentTarget.value)
    }
  
    const handleChangeContent = (event) => {
      console.log('changed content')
      setContent(event.currentTarget.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const id = createId();
      setTodos((prev) => [...prev, {id, title, content }]);
      setTitle('') 
      setContent('')
      
    }
  
    return (
      <section id="section1">
        <form onSubmit={handleSubmit}>
          <Input 
            id="title" 
            name="title" 
            label="Tittel:" 
            type="text" 
            handleChange={handleChangeTitle} 
            value={title} />
          <Input 
            id="content" 
            name="content" 
            label="Innhold:" 
            type="textarea"
            handleChange={handleChangeContent} 
            value={content} />
              <button id="formbutton" type="submit">
            Legg til
          </button>
        </form>
      </section>
    );
  }