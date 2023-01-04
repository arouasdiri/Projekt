list=['AC.png','2C.png','3C.png','4C.png','5C.png','6C.png','7C.png','8C.png','A2C.png','22C.png','32C.png','42C.png','52C.png','62C.png','72C.png','82C.png',]
function shuf(list){
    newlist=[]
    for (var i = 0; i < list.length; i++) {
        key=Math.floor(Math.random() * 16-i)+i
        aus=list[key]
        list[key]=list[i]
        list[i]=aus

    }
}

shuf(list)



for (var i = 0; i < list.length; i++) {
    document.getElementById('body').innerHTML+="<img class='back' src=red_back.png onclick=flip('"+list[i]+"') id ='"+list[i]+"'>"
    if ((i+1)%8==0){document.getElementById('body').innerHTML+="<br>"}
}
num=0
points=0
okay=true
cards=[]

function flip(key){
    if (okay){

    document.getElementById(key).src=key
    
    num+=1
    cards.push(key)

    if (num%2==0){
        okay=false
        setTimeout(function(){okay=true},1500);
        num=0;
        if (cards[0][0]==cards[1][0] && cards[0][1]!=cards[1][1] ){

        points+=40
        document.getElementById('points').innerHTML="your points : "+points
    }else{
        setTimeout(function(){flipback()},1000)}
    
{setTimeout(function(){cards=[]},1500);
}}}}
function flipback(){

    document.getElementById(cards[0]).src="red_back.png"
    document.getElementById(cards[1]).src="red_back.png"

}