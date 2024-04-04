// function play(){
//     // Step -01: hide the home Screen to hide the screen and the class hidden to the home section
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden')

//     // Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function handlekeyboardkeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)


    // stp the the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected the press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        // console.log('You have pressed correctly', expectedAlphabet);
        
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        
        
        
        
        
        
        // ------------------------------------------------------------------
        // score Update:
        // 1. get the current Score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        

        // // 2. increase the score by 1
        const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed . You lost a life');


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }



        // ----------------------------------------------------------
        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: 
        // currentLifeElement.innerText = newLife;
    }
    
}

document.addEventListener('keyup', handlekeyboardkeyUpEvent);

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);


    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backgroundColor
    setBackgroundColorById(alphabet);

}


function play(){
    // gide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get thge final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last slected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}