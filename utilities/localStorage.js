export const importDecks = decks => {
    let ID = JSON.parse(localStorage.getItem('ID'));
    decks = decks.map(deck => {
        ID += 1;
        return {
            ...deck,
            ID
        };
    });
    localStorage.setItem('ID', ID);

    const decksFromLocalStorage = JSON.parse(localStorage.getItem('decks'));
    const combineDecks = [...decksFromLocalStorage, ...decks];
    localStorage.setItem('decks', JSON.stringify(combineDecks));
};

export const importIronmanCompleted = ironmanCompleted => {
    const ironmanCompletedFromLocalStorage = JSON.parse(
        localStorage.getItem('ironmanCompleted')
    );
    const combineIronmanCompleted =
        ironmanCompletedFromLocalStorage + ironmanCompleted;
    localStorage.setItem(
        'ironmanCompleted',
        JSON.stringify(combineIronmanCompleted)
    );
};

export const importAmountOfRolls = amountOfRolls => {
    const amountOfRollsFromLocalStorage = JSON.parse(
        localStorage.getItem('amountOfRolls')
    );
    const combineAmountOfRolls = amountOfRollsFromLocalStorage + amountOfRolls;
    localStorage.setItem('amountOfRolls', JSON.stringify(combineAmountOfRolls));
};
