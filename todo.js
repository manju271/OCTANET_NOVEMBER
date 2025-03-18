let inputs =document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    
    if(inputs.value ==""){
        alert("please Enter task");
        }

    else{
           let newEle = document.createElement("ul");
           newEle.innerHTML=inputs.value; 
           text.appendChild(newEle);
           
           
        }

 } 
        
