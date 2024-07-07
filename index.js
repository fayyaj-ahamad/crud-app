let inputData = document.querySelector("input");
let todoItem = document.querySelector("#todo_item");
let addButton = document.querySelector("button");

let data = [];
let edit_id = null;
const addData = () =>{
    addButton.addEventListener("click",function(){
        let tododata = {
            data: inputData.value
        }
        if(edit_id != null){
            data.splice(edit_id,1,tododata);
            
            edit_id = null
            display();
        }else{
            data.push(tododata);
            display();
        }
        
       
    })    
}


let display = () =>{
    let statement = '';
    data.forEach((item,index)=>{
        statement += `
        <div id="todo-list">
        <p>${item.data}</p>
            <button id="editbtn" onclick = "editbtn(${index})">Edit</button>
            <button id="deletebtn" onclick = "deletebtn(${index})">Delete</button>
        </div>    `
    });
    todoItem.innerHTML = statement
    inputData.value = "";
}


function editbtn (index){
    edit_id = index;
    inputData.value = data[index].data;
}

const deletebtn = (index) =>{
    data.splice(index,1);
    display();
}
addData();