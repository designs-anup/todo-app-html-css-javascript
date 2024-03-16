const todoForm = document.getElementById("toDoForm");
const todoInput = document.getElementById("toDoInput");
const myList = document.getElementById("myList");

todoForm.addEventListener("submit", function(e){	
	e.preventDefault();
	
	if(todoInput.value !== ""){
		createToDoList();
	}else{
		console.log("please enter a value");
	}
});

myList.addEventListener("click", remeoveList);

function remeoveList(e){
	if(e.target.classList.contains("remove")){
		//debugger;
		e.target.parentElement.remove();
	}
}


function createToDoList(){
	// console.log(todoInput.value);
	
	myList.innerHTML += "<li><span>"+todoInput.value+" </span><button class=\"remove\" >Remove</button> </li>";
	
	todoInput.value = "";
	todoInput.focus();
}
