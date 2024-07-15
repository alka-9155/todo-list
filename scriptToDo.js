// ONE WAY TO CREATE ELEMENTS USING JAVASCRIPT

// const container = document.createElement('div');
// document.body.appendChild(container);
// const header = document.createElement('header');
// container.appendChild(header)

// ANOTHER WAY TO CREATE ELEMENTS USING JAVASCRIPT

// const createElement = tag => {
//     return document.createElement(tag);
// }
// const addElement = (child,parent) => {
//     parent.appendChild(child);
// }
// const container = createElement("div");
// addElement(container,document.body);
// const header = createElement("header");
// addElement(header,container);
// container.setAttribute("class","container");

// MOVING TO THE TO-DO LIST ACTUAL CODE.

const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");
const taskField = document.querySelector("ol");
// console.log(taskField)
document.querySelector("form").addEventListener("submit",(event)=>{
    if(inputField.value === ""){
        alert("You must write something.");
    }else{
        event.preventDefault();
        const task = document.createElement("li");
        taskField.appendChild(task);
        task.textContent = inputField.value;
        inputField.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        task.appendChild(span);
    }
    saveData();
})
taskField.addEventListener("click",e=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

const saveData = ()=>{
    localStorage.setItem("data",taskField.innerHTML);
}
const showTask = ()=>{
    taskField.innerHTML = localStorage.getItem("data");
}
showTask();

