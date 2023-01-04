
const pack=['AC.png', 'AD.png', 'AH.png', 'AS.png','2C.png', '2D.png', '2H.png', '2S.png', '3C.png', '3D.png', '3H.png', '3S.png', '4C.png', '4D.png', '4H.png', '4S.png', '5C.png', '5D.png', '5H.png', '5S.png', '6C.png', '6D.png', '6H.png', '6S.png', '7C.png', '7D.png', '7H.png', '7S.png', '8C.png', '8D.png', '8H.png', '8S.png', '9C.png', '9D.png', '9H.png', '9S.png', '10C.png', '10D.png', '10H.png', '10S.png', ];

function start() {
	pack2=[]
	var a=document.getElementById('aziz')
	a.innerHTML='<button class="example_b" onclick="hit(true)">hit</button><button class="example_a" href="" onclick="hit(false)" >stay</button>'
	i=Math.floor(Math.random() * 40);
	document.getElementById('yes').innerHTML="your current score : "+(Math.floor(i/4)+1)
	document.getElementById('help').innerHTML+="<img src="+pack[i]+">"
	n1=(Math.floor(i/4)+1);
	i=Math.floor(Math.random() * 40)
	pack2.push(i)
	n2=(Math.floor(i/4)+1); 
}
function hit(ok)
{
	if (ok) 
	{
	i=Math.floor(Math.random() * 40);
		if ((Math.floor(i/4)+1)==1 && n1+11<=21)
		{
			n1+=11
		}
		else
		{
			n1+=(Math.floor(i/4)+1);
		}
	document.getElementById('help').innerHTML+="<img src="+pack[i]+">"
	document.getElementById('yes').innerHTML="your current score : "+n1}
	if (n2<18)
	{
		i=Math.floor(Math.random() * 40);
		if ((Math.floor(i/4)+1)==1 && n2+11<=21){n2+=11}
		else{n2+=(Math.floor(i/4)+1);}
		pack2.push(i)
	document.getElementById('opp').innerHTML+='<img src="'+pack[i]+'">'
	}
	else
	{
		 if (!ok){document.getElementById('opp').innerHTML="";stay()}
	}

}
function stay(){
	document.getElementById('aziz').innerHTML='<button class="example_b" onclick="restart()" >Start zurück</button>'
	document.getElementById('yes').innerHTML="your final score : "+n1+"<br> and the pc final score : "+n2
	for ( i = 0; i < pack2.length; i++) {
		document.getElementById('opp').innerHTML+='<img src="'+pack[pack2[i]]+'">'}
	if (n1<=21 && n2<=21){
	if (n1<n2){document.getElementById('yes').innerHTML+="<br> and the computer win"}
	else {if (n1>n2){document.getElementById('yes').innerHTML+="<br> and you win"}else{document.getElementById('yes').innerHTML+="<br> and its a draw"}}
}
else {if (n1>n2){document.getElementById('yes').innerHTML+="<br> and the computer win"}
	else {if (n1<n2){document.getElementById('yes').innerHTML+="<br> and you win"}else{document.getElementById('yes').innerHTML+="<br> and its a draw"}}}}



function restart(){
	document.getElementById('buddy').innerHTML='<p id="opp"><img src="red_back.png"></p> <br> <div id="aziz"><button class="example_b" href="" onclick="start()" >Starten</button></div> <p id="yes"></p> <p id="help"></p><form action="file:///E:/New%20folder%20(2)/main%20page.html?"><input class="example_b" type="submit" value="Zurück zur Hauptseite" align="right" /><script type="text/javascript" src="21.js"></script>'




}


/*</a><a class="example_a" href="" >start*/	