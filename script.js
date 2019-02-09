
let index=0;
let listOfsuits=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const numOfSuits=listOfsuits.length;
let cards;
let total;

function start(){
    let start=document.getElementById("startScreen");
    start.style.display="none";
    let game=document.getElementById("gameScreen");
    game.classList.remove("hidden");
    hit();
}

function hit(){
    if(index>3){
        miss();
    }
    let random=Math.floor(Math.random()*numOfSuits);
    document.getElementById("card"+index).classList.remove("hidden");
    document.getElementById("card"+index).classList.add("played");
    document.getElementById("card"+index).innerHTML=listOfsuits[random];
    index++;
    
}

function miss(){
    document.getElementById("hitButton").classList.add("hidden");
    total=getTotal();
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("results").innerHTML=total;
    document.getElementById("resetButton").classList.remove("hidden");
}

function getTotal(){
    var tot=0;
    cards=document.getElementsByClassName("played");
    console.log(cards);
    for(var i=0;i<cards.length;i++){
        let suit=cards[i].innerHTML;
        console.log(suit);
        if(suit=="A"){
            var num=parseInt(prompt("Do you want ace to be 1 or 11?"));
            tot+=num;
        }else if(suit=="J"||suit=="K"||suit=="L"){
            tot+=10;
        }
        else{
            tot+=parseInt(suit);
        }
    }
    console.log(tot)
    return tot;
}

function reset(){
    index=0;
    total=0;
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("startScreen").style.display="block";
    document.getElementById("results").innerHTML="";
    document.getElementById("results").classList.add("hidden");
    document.getElementById("hitButton").classList.remove("hidden");
    document.getElementById("resetButton").classList.add("hidden");
    for(var i=0;i<4;i++){
        document.getElementById("card"+i).innerHTML="";
        document.getElementById("played");
        document.getElementById("card"+i).classList.add("hidden");
    }
}