//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const backDrop = document.querySelector("#backdrop");
const filter = document.querySelector("#filter");

//Functions
const addTodo = (e) => {
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li");
    
    if(todoInput.value === ""){
        alert("List cannot be empty")
        return;
    } else{
        newTodo.innerText = todoInput.value;
    }

    newTodo.classList.add("todo-item")

    todoDiv.appendChild(newTodo);

    const completebtn = document.createElement("button");
    completebtn.innerHTML = '<i class="fas fa-plus"></i>';
    completebtn.classList.add("complete-btn");
    todoDiv.appendChild(completebtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deletebtn.classList.add("delete-btn");
    todoDiv.appendChild(deletebtn);

    todoList.appendChild(todoDiv);
    todoInput.value= "";
}

const deleteList = (event) => {
     const item = event.target;
     if(item.classList[0] === "delete-btn"){
         const todo = item.parentElement;
         todo.classList.add("fall");
         todo.addEventListener("transitionend", () =>{
            todo.remove();
         });
         
     }

     if(item.classList[0] === "complete-btn"){
         const todo = item.parentElement;
         todo.classList.toggle("completed");
     }
   
}

const filterTodo = (e) => {
    const todos = todoList.childNodes;
    
     todos.forEach( function(todo) {
         // console.log(todo.classList)
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
                case "done-tasks":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex"
                    }else {
                        todo.style.display = "none"
                    }
                    break;
                    case "undone-tasks":
                        if(!todo.classList.contains("completed")){
                            todo.style.display = "flex"
                        }else {
                            todo.style.display = "none"
                        }
                        break;
        }
    });
}
   
    
//Event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteList);
filter.addEventListener("click", filterTodo);