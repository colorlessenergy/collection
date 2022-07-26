import React, { useEffect, useState } from 'react';

import FilterDecks from './FilterDecks';
import DisplayDeck from './DisplayDeck';

const DisplayDecks = () => {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }

        setDecks(JSON.parse(localStorage.getItem('decks')));
    }, []);

    const handleDeleteDeck = deckID => {
        let decks = JSON.parse(localStorage.getItem('decks'));
        const deckIndex = decks.findIndex(deck => deck.ID === deckID);
        decks.splice(deckIndex, 1);
        localStorage.setItem('decks', JSON.stringify(decks));

        setDecks(decks);
    };

    const [filterValue, setFilterValue] = useState('');
    const filterDecks = deck => {
        for (let i = 0; i < deck.cards.length; i++) {
            if (
                deck.cards[i].name
                    .toLowerCase()
                    .includes(filterValue.trim().toLowerCase())
            ) {
                return true;
            }
        }

        return false;
    };
    const filteredDecks = decks.filter(filterDecks);

    return (
        <React.Fragment>
            <FilterDecks
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />

            {filteredDecks.length ? (
                filteredDecks.map(deck => {
                    return (
                        <DisplayDeck
                            key={deck.ID}
                            deck={deck}
                            handleDeleteDeck={handleDeleteDeck}
                        />
                    );
                })
            ) : decks.length && filterValue ? (
                <div className="t-center font-size-2">nothing was found</div>
            ) : null}
        </React.Fragment>
    );
};

export default DisplayDecks;
