var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // li
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 


	//START
	// function, Add New TODO
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END


	// START DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END DLT BUTTON


	//ADD CLASS DELETE 
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);