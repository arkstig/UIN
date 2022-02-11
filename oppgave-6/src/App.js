import './styles.css';

function Header() {
  return (
    <header>
        
            <h1>HIOF</h1>
            <nav>Stig Ark</nav>
        
    </header>
  )
}

function Form() {
  return (
    <section id="section1">
    <form>
        <label for="title"><h2>Title</h2></label>
        <input type="text" id="title"/>
        <label for="content"><h2>Content</h2></label>
        <textarea id="content" rows="6" cols="40"></textarea>
        <button id="formbutton" type="submit" value="submit">Add</button>
    </form>
</section>
  )
}

function TodoList(){
  return (
<section id="todo">
            
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        </section>
  )
}

function Todo() {
  return (
    <article>
                <h3>Todotitle</h3>
                <p>Lorem ipsum dolor sit amet. Paragraph Todo...</p>
                <Button />
            </article>
  )
}

function Button() {
  return (
    <button id="complete">Complete</button>
  )
}

export default function App() {
  return (
    <>
    <Header />
    <main>
    <Form />
    <TodoList />
    </main>
    </>
  );
}


