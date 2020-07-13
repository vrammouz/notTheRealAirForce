var feds = "feds";
var terrorists = "terrorists";
var start = document.getElementById("start");
var user = document.getElementById("user");
var opponent = document.getElementById("opponent");
var hasChosen = false;
var div = document.querySelector(".box");

function chooseSide()
{
	var shooter = prompt("feds or terrorists?","");
	var userText = "";
	
	if(shooter == feds)
	{
		hasChosen = true;
		user.className="feds";
		opponent.className="terrorists";
	}

	else if(shooter == terrorists)
	{
		hasChosen = true;
		user.className="terrorists";
		opponent.className="feds";
	}

	else if(shooter != feds || shooter!=terrorists || shooter == 0)
	{
		hasChosen = false;
		alert("Please choose a valid side!!");
	}
	userText="User";
	user.appendChild(document.createTextNode(userText));
}

// function move()
// {
// 	switch(direction)
// 	{
// 		case left:
// 			divs[userIndex-5]=user;
// 			userIndex-=5;
// 		case right:
// 			divs[userIndex+5]=user;
// 			userIndex+=5;
// 		case up:
// 			divs[userIndex-1]=user;
// 			userIndex-=1;
// 		case down:
// 			divs[userIndex+1]=user;
// 			userIndex+=1;
// 	}

// }

function getDirection(event)
{
	switch(event.keyCode)
	{
		case 65:
			user.setAttribute("style","transform:translateX(-10px);");
			break;
		case 87:
			user.setAttribute("style","transform:translateY(10px);");
			break;
		case 68:
			user.setAttribute("style","transform:translateX(10px);");
			break;
		case 83:
			user.setAttribute("style","transform:translateY(-10px);");
			break;
		default:
			return 0;
	}
	
}

function move()
{
	div.id = user.id;
}

div.addEventListener("click",move);
user.addEventListener("keypress",getDirection);
start.addEventListener("click",chooseSide);
// function moveUser(event)
// {	
// 	for(var i=0;i<divs.length;i++)
// 		{
// 			if(divs[i] == user && event.keyCode === 65 )//left a
// 				divs[i-5].appendChild(user);

// 			else if(divs[i] == user && event.keyCode === 87)//up w
// 				divs[i-1].appendChild(user);

// 			else if(divs[i] == user && event.keyCode === 68)//right d
// 				divs[i-1].appendChild(user);

// 			else if(divs[i] == user && event.keyCode === 83)//down s
// 				divs[i-1].appendChild(user);
// 		}
	
// }

// user.addEventListener("keypress",moveUser);
