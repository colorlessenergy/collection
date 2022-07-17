import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import FilterDecks from './FilterDecks';

const DisplayDecks = () => {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
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
        if (
            deck.title.toLowerCase().includes(filterValue.trim().toLowerCase())
        ) {
            return true;
        }

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
                        <div key={deck.ID}>
                            <div className="deck-header">
                                <div className="font-size-2">{deck.title}</div>

                                <div>
                                    <button
                                        onClick={() =>
                                            handleDeleteDeck(deck.ID)
                                        }
                                        className="mr-1">
                                        <svg
                                            className="icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24">
                                            <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" />
                                        </svg>
                                    </button>
                                    <a href={deck.link}>
                                        <svg
                                            className="icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24">
                                            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="deck-images-container">
                                {deck.cards.map(card => {
                                    return (
                                        <div
                                            key={card.id}
                                            className="deck-image">
                                            <Image
                                                src={`/cards/${card.key}.png`}
                                                layout="responsive"
                                                width="80"
                                                height="96"
                                                title={card.name}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })
            ) : decks.length && filterValue ? (
                <div className="t-center font-size-2">nothing was found</div>
            ) : null}
        </React.Fragment>
    );
};

export default DisplayDecks;
