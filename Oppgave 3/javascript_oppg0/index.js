// Oppgave 1
const removeBtn = document.querySelector('#remove-btn');
const removeText = document.querySelector('#remove');

removeBtn.addEventListener('click', () => {
    removeText.remove();
    console.log('Knapp trykket');
});
// Oppgave 2
const changeBtn = document.querySelector('#change-btn');
const originalText = document.querySelector('#change');
const myText = document.createElement('p');

changeBtn.addEventListener('click', () => {
    myText.appendChild(document.createTextNode('Mitt navn er Stig Ark'));
    originalText.replaceChild(myText, originalText.lastChild);

});
// Oppgave 3
const txtInput = document.querySelector('#input');
const txtOutput = document.querySelector('#input-text');

document.addEventListener('keyup', buttonReleased);

function buttonReleased(e) {
       if(e.key == "Enter") {
        write()
     }
	  
    }
    function write () {
        const name = document.querySelector('#input').value;
        document.querySelector('#input-text').innerHTML = name;
        console.log('Den kjøres');
        }



// Oppgave 4
       const myList = ["item one", "item two", "item three"];
       const writeButton = document.querySelector('#write-list');
       const list = document.querySelector('#ul'); 
       
       writeButton.addEventListener('click', () => {

        myList.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);

        });
        
       });


// Oppgave 5
    const createBtn = document.getElementById('create');
    const placeHolder = document.getElementById('placeholder')
    const text = document.getElementById('text')
    const select = document.getElementById('select')
    
    const createElement = () => {
            const htmlEl = select.value;
            const message = text.value;
            placeHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
    };

       createBtn.addEventListener('click', createElement);

// Oppgave 6
    
const removeBtn1 = document.getElementById('remove-li');

const removeElement = () => {
   
     const listUl = document.getElementById('list');
     listUl.removeChild(listUl.childNodes[0]);
              
}

   removeBtn1.addEventListener('click', removeElement);


       //https://www.w3schools.com/JSREF/met_node_removechild.asp
// Oppgave 7

const inputTxt = document.getElementById('name');
const orderBtn = document.getElementById('order');

    const keyPressed = () => {
        const word = inputTxt.value;
        if (word && word.length >= 4) {
            orderBtn.disabled = true;
            orderBtn.style = 'border: 2px solid red';
        } else  {
            orderBtn.disabled = false;
            orderBtn.style = 'border: 1px solid black';
        }    
    
    };

    inputTxt.addEventListener('keyup', keyPressed);
    
// Oppgave 8


const ulList = document.getElementById('children');
const changesBtn = document.getElementById('color');
const ulChildren = document.querySelectorAll('li');

const changeColor = () => {
    Array.from(ulChildren).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style = "border: 1px solid pink;";
        } else {
            li.style = "border: 1px solid green;";
        }
    });
};
  


changesBtn.addEventListener("click", changeColor);
