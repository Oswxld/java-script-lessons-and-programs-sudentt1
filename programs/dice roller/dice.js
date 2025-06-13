let random ;

function rollDice() {
    random = Math.floor(Math.random()*6)+1;
    document.getElementById("dicerolled").textContent = `you rolled a ${random}`;
    let dicephoto = document.getElementById("dicephoto");
    dicephoto.src = `photos/dice${random}.jpeg`;
    // dicephoto.src = `photos/dice${random}.png`;


}



