const todolist = [{ name: 'make dinner', dueDate: '2022-12-11'}, {name: 'wash dishes' , dueDate: '2023-12-05'}];

renderTodoList();
function renderTodoList() {
  let todoListHTML = '';

for (let i = 0; i < todolist.length; i++){
  const todoObject = todolist[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject;
  const html = `
  <div>${name} </div>
  <div>${dueDate}</div>
   <button onclick="
    todolist.splice(${i}, 1);
    renderTodoList();
   " class="delete-todo-button">Delete</button> 
   `;
  todoListHTML += html;
}


document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}
function handleCostKeydown(event){
            
  if(event.key === 'Enter'){
  addTodo();
}

}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({
   // name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
 

  inputElement.value= ' ';
  
  renderTodoList();


  

}