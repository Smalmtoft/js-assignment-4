function guessNumberGame () {

    while (true) {

        let hiddenNumber = Math.floor(Math.random()*10)+1;
        let input = parseInt(prompt("Guess a number from 1 to 10"));


        while(input != hiddenNumber){


            if(input > hiddenNumber){
                alert(`Oh, your guess was too high...`);
                input = prompt("Guess a lower number between 1 to 10:");
            }

            if(input < hiddenNumber){
                alert(`Oh, your guess was too low...`);
                input = prompt("Guess a higher number between 1 to 10:");
            }

        }

        alert(`Woho! You've got the right number, which was ${hiddenNumber}!`)
        
        let playAgain = confirm ("How about playing again?");

    }
}

guessNumberGame();
