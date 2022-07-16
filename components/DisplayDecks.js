import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const DisplayDecks = () => {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        setDecks(JSON.parse(localStorage.getItem('decks')));
    }, []);

    return (
        <React.Fragment>
            {decks.map(deck => {
                return (
                    <div>
                        <div className="deck-header">
                            <div className="font-size-2">{deck.title}</div>

                            <div>
                                <button className="mr-1">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24">
                                        <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" />
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24">
                                        <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="deck-images-container">
                            {deck.cards.map(card => {
                                return (
                                    <div className="deck-image">
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
            })}
        </React.Fragment>
    );
};

export default DisplayDecks;
