var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png", ]
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<italic>Player 1 wins</italic>";
}
else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "<italic>Player 2 wins</italic>";
}
else{
        document.querySelector("h1").innerHTML = "<italic>Draw!!</italic>"
}
