function Click(){
    let playerOne;
    let PlayerTwo;
    playerOne = Math.floor(Math.random()*6)+1;
    document.querySelector("#player1").setAttribute("src","images/dice"+playerOne+".png")
    playerTwo = Math.floor(Math.random()*6)+1;
    document.querySelector("#player2").setAttribute("src","images/dice"+playerTwo+".png")
    if(playerOne>playerTwo){
        document.querySelector("h1").textContent = "Player One Wins";
    }
    else if(playerTwo>playerOne){
        document.querySelector("h1").textContent = "Player Two Wins";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}