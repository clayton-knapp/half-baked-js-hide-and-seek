// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

// getRandomItem(hidingPlaces);

function handleGuess(userGuess, correctSpot) {
    // console.log(userGuess);
    // console.log(correctSpot);

    // should reset the styles
    resetStyles();
    
    // then increment the guesses
    totalGuesses++;
    
    // then grab the appropriate container element for the correct guess from the DOM
    // const correctContainer = correctSpot + "-container";
    // console.log(correctContainer);

    const correctContainerEl = document.getElementById(correctSpot + '-container');
    console.log(correctContainerEl);

    
    // then add the face class to that element so that the face shows up
    correctContainerEl.classList.add('face');

    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot){
        correctGuesses++;
    }

    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}

function resetStyles() {
    // should remove the face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    
}

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const generatedSpot = getRandomItem(hidingPlaces);
    //console.log(generatedSpot);

    //calls the getRandomItem function, passes in hidingPlaces array which has list of 3 strings. The function picks a random index of 0, 1 or 2. then returns the returns the index of the array with the randomly generated index. so it should return randomly either tree boulder or shed

    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('tree', generatedSpot);
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const generatedSpot = getRandomItem(hidingPlaces);

    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('boulder', generatedSpot);
});

shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const generatedSpot = getRandomItem(hidingPlaces);

    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('shed', generatedSpot);
});


