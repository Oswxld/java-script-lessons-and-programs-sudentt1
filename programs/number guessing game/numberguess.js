let secretNumber = Math.floor(Math.random()*100)+1;
let scorecount = 0;

let gameover = false;





function makeGuess(){
    

    while(!gameover){
        let guess = window.prompt(`guess a number between 1 and 100`)
        
        let result = document.getElementById("result");
        let score = document.getElementById("score");
        
        scorecount++;
        if(guess < 1 || guess > 100 || isNaN(guess) ){
            window.alert("please enter a valid number between 1 and 100");
            
        }
        else if( guess == secretNumber){
            window.alert (`congratulations bro took you long enough 😂..the secret number was ${secretNumber}`);
            
            gameover = true;
        }
        else if( guess > secretNumber){
            window.alert (`TOO HIGH GO A LIL LOWER BRODIE`);
            score.textContent =`your score is now -${scorecount}`;

        }
        else if( guess < secretNumber){
            window.alert (`TOO LOW GO A LIL HIGHER BRODIE`);
            score.textContent = `your score is now -${scorecount}`
            
        }
    }
    document.getElementById("nameoutput").textContent = ` name is ${document.getElementById("nameofplayer").value}`;
    score.textContent = `your score was -${scorecount}`;
}