const taskContainer=document.getElementById('task-container');
const inputTask=document.getElementById('inputTask');
const inputDate=document.getElementById('inputDate');
const addBtn=document.getElementById('addBtn');
let btnIndex=0;
let taskArray=[
 
]

addBtn.addEventListener("click",add)
document.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        add();
    }
})

function add(){
    if(inputTask.value!='' && inputDate.value!=''){
       let taskValue=inputTask.value;
       let taskDate=inputDate.value;
       taskArray.push({item:taskValue,date:taskDate});
       console.log(taskArray);
       display();
       inputTask.value='';
       inputDate.value='';
    }
}

function display(){
    taskContainer.innerHTML=''
    for(var i=0;i<taskArray.length;i++){
        taskContainer.innerHTML+=`<div class="task">
            <p>${taskArray[i].item}</p>
            <p>${taskArray[i].date}</p>
            <button onclick="dlt(this)" id="${i}">Delete</button>
        </div>`
        
    }
}

function dlt(val){
    taskArray.splice(val.id,1);
    display();
}