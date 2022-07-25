import React, { useRef, useState } from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';
import DisplayDeck from '../components/DisplayDeck';

export default function Roll() {
    const [rolledDeck, setRolledDeck] = useState(null);
    const previousRollIndex = useRef(null);
    const rollDeck = () => {
        const decks = JSON.parse(localStorage.getItem('decks'));
        let randomIndex = Math.floor(Math.random() * decks.length);
        while (previousRollIndex.current === randomIndex) {
            randomIndex = Math.floor(Math.random() * decks.length);
        }

        previousRollIndex.current = randomIndex;
        setRolledDeck(decks[randomIndex]);
    };

    return (
        <div>
            <Head>
                <title>collection - roll for random clash royale deck</title>
                <meta
                    name="description"
                    content="collection - roll for random clash royale deck"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />
                <h1 className="my-2">roll for random deck</h1>

                {JSON.parse(localStorage.getItem('decks')).length <= 1 ? (
                    <p>at least two decks are needed to roll</p>
                ) : (
                    <React.Fragment>
                        <DisplayDeck deck={rolledDeck} />

                        <button onClick={rollDeck} className="pushable mt-2">
                            <span className="front">ROLL</span>
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}
