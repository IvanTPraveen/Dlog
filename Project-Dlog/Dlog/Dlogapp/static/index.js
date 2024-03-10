let comp = Math.round(Math.random() * 2);
let user;
let wins = 0;
let loss = 0;
let draws = 0;

if (comp == 0){
    comp = "rock";
}else if (comp == 1){
    comp = "paper";
}else if (comp == 2){
    comp = "scissors";
}else{
    console.log(comp)
}

console.log(comp);

function rock(){
    user = "rock";
    if (comp == user){
        console.log("draw");
        draws += 1
        document.getElementById("draws").innerHTML = "Draws: " + draws;
    }else if (comp == "paper" && user == "rock"){
        console.log("you lose");
        loss += 1
        document.getElementById("loss").innerHTML = "Loss: " + loss;
    }else if (comp == "scissors" && user == "rock"){
        console.log("you win");
        wins += 1
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    }else{
        console.log("error");
    }
}

function paper(){
    user = "paper";
    if (comp == user){
        console.log("draw");
        draws += 1
        document.getElementById("draws").innerHTML = "Draws: " + draws;
    }else if (comp == "rock" && user == "paper"){
        console.log("you win");
        wins += 1
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    }else if (comp == "scissors" && user == "paper"){
        console.log("you lose");
        loss += 1
        document.getElementById("loss").innerHTML = "Loss: " + loss;
    }else{
        console.log("error");
    }
}

function scissors(){
    user = "scissors";
    if (comp == user){
        console.log("draw");
        draws += 1
        document.getElementById("draws").innerHTML = "Draws: " + draws;
    }else if (comp == "paper" && user == "scissors"){
        console.log("you win");
        wins += 1
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    }else if (comp == "rock" && user == "scissors"){
        console.log("you lose");
        loss += 1
        document.getElementById("loss").innerHTML = "Loss: " + loss;
    }else{
        console.log("error");
    }
}

function reset(){
    comp = Math.round(Math.random() * 2);
    wins = 0;
    draws = 0;
    loss = 0;
    document.getElementById("draws").innerHTML = "Draws: " + draws;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Loss: " + loss;
    if (comp == 0){
        comp = "rock";
    }else if (comp == 1){
        comp = "paper";
    }else if (comp == 2){
        comp = "scissors";
    }else{
        console.log(comp)
    }
    
    console.log(comp);
}