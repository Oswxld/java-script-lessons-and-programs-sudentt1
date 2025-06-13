function diceroller(){
let diceinput = document.getElementById("diceinput").value;
let dicepicture = document.getElementById("diceimages");
let diceresults = document.getElementById("diceresults");
let dicerollresults = [];
let diceimagesresults = [];

for (let dice of diceinput) {
    let diceroll = Math.floor(Math.random()*6)+1;
    dicerollresults.push(diceroll);
    diceimagesresults.push(`<img src="dice${diceroll}.jpg" alt="Dice ${diceroll}" class="dice-image">`);

}
diceresults.textContent = `You rolled: ${dicerollresults}.join(", ")`;
dicepicture.innerHTML = diceimagesrresults.join(" ");
}