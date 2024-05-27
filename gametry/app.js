let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")




const genComputerChoice =() =>{
    const option =["rock","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return option[randomindex];
}
// [
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}
// ]




const showWinner=(userWin)=>{
    if(userWin){
console.log("You Win!");
msg.innerText="You win!";
msg.style.backgroundColor="green";
}
else{
    console.log("You lose the game.");
    msg.innerText=("You lose the game");
    msg.style.backgroundColor="red";
}
}



const playGame =(userChoice) =>{
console.log("user choice=",userChoice);
// generate computor choice-> modular way of programming
const compChoice=genComputerChoice();
console.log("comp choice =",compChoice);
if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;

    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked" ,userChoice);
        playGame(userChoice);

    });
});




