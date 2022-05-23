
console.log("Hello THere");

function computerOption(){
    return parseInt((Math.random() * 3)+1);
}

function hello() {
    console.log("hello");
};

function rockChoice(){
    let walle = computerOption();
    gameLogic(1, walle);
    console.log("rock");

}

function paperChoice(){
    let walle = computerOption();
    gameLogic(2, walle);
    console.log("paper");
}

function scissorChoice(){
    let walle = computerOption();
    gameLogic(3, walle);
    console.log("scissors");
}

function gameLogic(humanChoice, robotChoice){

    console.log("human Choice ==" + humanChoice);
    console.log("computer Choice ==" + robotChoice);

    if((robotChoice - humanChoice == 1) || (robotChoice == 3 && humanChoice == 1)){
        response(1);
    }else if((humanChoice - robotChoice == 1) || (humanChoice == 3 && robotChoice == 1)){
        response(2);
    }else{
        response(3);
    }
}

const result = document.querySelector(".result");

function response(answer){
    if(answer === 1){
        result.textContent = "Computer Wins"
    } else if(answer === 2){
        result.textContent = "Human Wins"
    } else if(answer === 3){
        result.textContent = "Draw"
    }
}