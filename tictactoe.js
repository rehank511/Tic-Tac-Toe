var turn="X";
var n = 0;
var grid = [];
for(var i=0; i<9; i++) {
    grid[i] = [];
    for(var j=0; j<9; j++) {
        grid[i][j] = 'e';
    }
}
window.onload = setup;
function setup()
{
	var msg=document.getElementById("output");
	msg.innerHTML="Player " + turn + " : please Click on a square";
	var button1 = document.getElementById("cell00");
	button1.onclick = cell00;
	var button2 = document.getElementById("cell01");
	button2.onclick = cell01;
	var button3 = document.getElementById("cell02");
	button3.onclick = cell02;
	var button4 = document.getElementById("cell10");
	button4.onclick = cell10;
	var button5 = document.getElementById("cell11");
	button5.onclick = cell11;
	var button6 = document.getElementById("cell12");
	button6.onclick = cell12;
	var button7 = document.getElementById("cell20");
	button7.onclick = cell20;
	var button8 = document.getElementById("cell21");
	button8.onclick = cell21;
	var button9 = document.getElementById("cell22");
	button9.onclick = cell22;
}
function cell00()
{
	var symbol=document.getElementById("cell00");
	grid[0][0]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell01()
{
	var symbol=document.getElementById("cell01");
	grid[0][1]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell02()
{
	var symbol=document.getElementById("cell02");
	grid[0][2]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell10()
{
	var symbol=document.getElementById("cell10");
	grid[1][0]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell11()
{
	var symbol=document.getElementById("cell11");
	grid[1][1]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell12()
{
	var symbol=document.getElementById("cell12");
	grid[1][2]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell20()
{
	var symbol=document.getElementById("cell20");
	grid[2][0]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell21()
{
	var symbol=document.getElementById("cell21");
	grid[2][1]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}
function cell22()
{
	var symbol=document.getElementById("cell22");
	grid[2][2]=turn;
	symbol.innerHTML=turn;
	if(turn=="X")
		turn="O";
	else
		turn="X";
	var msg=document.getElementById("output");
	symbol.onclick=null;
	msg.innerHTML="Player " + turn + " : please Click on a square";
	console.log(this);
	n++;
	win();
}

function win() 
{
	var win = 0;
	for(var i = 0; i<3;i++)
	{
		var count=0;
		for(var j = 0; j<3;j++)
		{
			if(grid[i][j] == "X")
			{
				count++;
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! X WON!!!"
			win = 1;
		}
	}
	for(var i = 0; i<3;i++)
	{
		var count=0;
		for(var j = 0; j<3;j++)
		{
			if(grid[j][i] == "X")
			{
				count++;
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! X WON!!!"
			win = 1;
		}
	}

	
	for(var i = 0; i<3;i++)
	{
		var count=0;
		for(var j = 0; j<3;j++)
		{
			if(grid[i][j] == "O")
			{
				count++;
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! O WON!!!"
			win = 1;
		}
	}
	for(var i = 0; i<3;i++)
	{
		var count=0;
		for(var j = 0; j<3;j++)
		{
			if(grid[j][i] == "O")
			{
				count++;
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! O WON!!!"
			win = 1;
		}
	}
	var count = 0;
	for(var i =0; i<3;i++)
	{
		if(grid[i][i] == "O")
		{
			count++;
		}
	}
	if(count == 3)
	{
		var msg=document.getElementById("output");
		msg.innerHTML="Congrats!!! O WON!!!"
		win = 1;
	}
	var count = 0;
	for(var i =0; i<3;i++)
	{
		if(grid[i][i] == "X")
		{
			count++;
		}
	}
	if(count == 3)
	{
		var msg=document.getElementById("output");
		msg.innerHTML="Congrats!!! X WON!!!"
		win = 1;
	}
	
		var count=0;
	for(var i = 0; i<3;i++)
	{
		for(var j = 0; j<3;j++)
		{
			if(i+j == 2)
			{
				if(grid[i][j] == "O")
				{
					count++;
				}
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! O WON!!!"
			win = 1;
		}
	}
	var count=0;
	for(var i = 0; i<3;i++)
	{
		for(var j = 0; j<3;j++)
		{
			if(i+j == 2)
			{
				if(grid[i][j] == "X")
				{
					count++;
				}
			}
		}
		if(count == 3)
		{
			var msg=document.getElementById("output");
			msg.innerHTML="Congrats!!! X WON!!!"
			win = 1;
		}
	}
	
	if(win == 0 && n == 9)
	{
		var msg=document.getElementById("output");
		msg.innerHTML="StaleMate!!"
	}
	if(win ==1)
	{
		var button1 = document.getElementById("cell00");
		var button2 = document.getElementById("cell01");
		var button3 = document.getElementById("cell02");
		var button4 = document.getElementById("cell10");
		var button5 = document.getElementById("cell11");
		var button6 = document.getElementById("cell12");
		var button7 = document.getElementById("cell20");
		var button8 = document.getElementById("cell21");
		var button9 = document.getElementById("cell22");
		button1.onclick=null;
		button2.onclick=null;
		button3.onclick=null;
		button4.onclick=null;
		button5.onclick=null;
		button6.onclick=null;
		button7.onclick=null;
		button8.onclick=null;
		button9.onclick=null;
	}
	
}

