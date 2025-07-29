let todoArray = []; 

function addTodo(){
    let input = document.querySelector('.todoIn');
    let value = input.value;
    let date = document.querySelector('.dateIn');
    let dateValue = date.value;
   
    todoArray.push({
      name: value,
      date: dateValue
    }
    );
    console.log(todoArray);
    input.value= '';
    render();
  }

function render(){
  if(todoArray.length === 0){
    document.querySelector('.todoDiv').innerHTML='Busy day, Huh?';
    return;
  }


  let listHTML = '';

  todoArray.forEach((todo, index) => {
    const name = todo.name;
    const date = todo.date;
    let html = `
      <p>
  ${index+1}. ${name}
      </p>
      <p>
        ${date}
      </p>
      <p>
        <button class = "delBtn dell" style="background-color:darkred; padding: 5px 27px;">Delete</button>
      </p>
      `;
    listHTML = listHTML + html;
  });
  document.querySelector('.todoDiv').innerHTML = listHTML;   
 
    document.querySelectorAll('.dell')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        console.log(index);
        todoArray.splice(index, 1);
        render();
      });
    
      
    });
   
  }
 


 
function enter(){
  if(event.key === 'Enter'){
    addTodo(); render();
  }
}

function saveToStorage(){
  localStorage.setItem()
}

document.querySelector('.add')
.addEventListener('click', () => {
  addTodo();
})



