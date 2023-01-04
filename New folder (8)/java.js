d=1
hopekey=true
function hope(a) {
    if(hopekey)    {document.getElementById(a).style.backgroundColor="white"
    answer.push(a)
    notokay=(answer[ans_num]==colors_group[ans_num])
    ans_num++
    if (!notokay) {check();document.getElementById("closeplz").disabled=false}
    
    if (answer.length+1==d) {check();document.getElementById("closeplz").disabled=false}
}}
function despair(a){
    document.getElementById(a).style.removeProperty("background-color");
}
function start(){
  
    document.getElementById('title').innerHTML="number of squares memorised : "+String(d)
    ans_num=0 /*answer Number*/
    answer=[]
    colors_group=[]
    l=500
    for (var i = 0; i < d; i++) {
        ad=1000*(i)
        hopekey=false
        setTimeout(function(){ coloring()}, ad+l);
        setTimeout(function(){ document.getElementById("a"+String(key)).style.removeProperty("background-color");}, ad+1000);
        setTimeout(function(){hopekey=true}, 1000*d);

    }
    d++
    document.getElementById("closeplz").disabled=true
}
function coloring(){
            key=Math.floor(Math.random() * 9)+1;
        document.getElementById("a"+String(key)).style.backgroundColor="white"
        colors_group.push("a"+String(key))
}

function check(){
    okay=true
    for (var i = 0; i < answer.length; i++) {
        okay= okay && (answer[i]==colors_group[i])
    }
    if (okay) {document.getElementById('goal').innerHTML="bravo !! gute Job";document.getElementById('goal').style.color="green"}
    else{document.getElementById('goal').innerHTML="Schade ! you lost";document.getElementById('goal').style.color="red";d=1}
}