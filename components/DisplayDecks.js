import React, { useEffect, useState } from 'react';

import FilterDecks from './FilterDecks';
import DisplayDeck from './DisplayDeck';

import { getAverageElixir } from '../utilities/cards';

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

    const [sortBy, setSortBy] = useState('low');
    const onSortByChange = event => {
        setSortBy(event.currentTarget.value);
    };

    const modifiedDecks = JSON.parse(JSON.stringify(decks))
        .filter(filterDecks)
        .sort((a, b) => {
            const aAverageElixir = getAverageElixir(a.cards);
            const bAverageElixir = getAverageElixir(b.cards);

            if (sortBy === 'low') {
                return aAverageElixir - bAverageElixir;
            }

            return bAverageElixir - aAverageElixir;
        });

    return (
        <React.Fragment>
            <FilterDecks
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />

            <div className="d-flex">
                <div className="mr-1">sort by:</div>
                <input
                    type="radio"
                    className="mr-1"
                    id="low"
                    name="elixir-cost"
                    value="low"
                    onChange={onSortByChange}
                    checked={sortBy === 'low'}
                />
                <label className="mr-1 cursor-pointer" htmlFor="low">
                    low
                </label>

                <input
                    type="radio"
                    className="mr-1"
                    id="high"
                    name="elixir-cost"
                    value="high"
                    onChange={onSortByChange}
                    checked={sortBy === 'high'}
                />
                <label className="cursor-pointer" htmlFor="high">
                    high
                </label>
            </div>

            {modifiedDecks.length ? (
                modifiedDecks.map(deck => {
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
