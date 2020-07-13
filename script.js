//comments' page script
var input = document.getElementById("userInput");
var firstName = document.getElementById("firstn");
var lastName = document.getElementById("lastn");
var email = document.getElementById("email");
var post = document.getElementById("post");
var ul = document.querySelector(".cmt ul");
var isEven = true;

function isEmpty()
{
	if(input.value.length==0 || firstName.value.length==0 || lastName.value.length==0 || email.value.length==0)
		return true;
	return false;
}

function addComment()
{
	var div1 = document.createElement("div");
	var div2 = document.createElement("div");
	var li = document.createElement("li");
	
	div1.appendChild(document.createTextNode(firstName.value+" "+lastName.value+": "));
	div2.appendChild(document.createTextNode(input.value));

	div1.className="nameInput";
	div2.setAttribute("style","margin-left:20px;color:white;");
	li.appendChild(div1);
	li.appendChild(div2);

	if(isEven)
	{
		li.className="even";
		isEven=false;
	}

	else
		isEven=true;
	

	ul.appendChild(li);
	firstName.value="";
	lastName.value="";
	email.value="";
	input.value="";
}

function addItem()
{
	if(!isEmpty())
		addComment();
	
	else
		alert("You can't comment with missing value(s).");
}

function postWithEnter(event)
{
	if(event.keyCode === 13)
		addItem();
}

post.addEventListener("click",addItem);
ul.addEventListener("keypress",postWithEnter);

//join.html script
