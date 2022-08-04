import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/Nav';
import DisplayDeck from '../../components/DisplayDeck';

export default function Ironman() {
    const [decks, setDecks] = useState([]);
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }

        setDecks(JSON.parse(localStorage.getItem('decks')));
    }, []);

    const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
    const handleNextDeck = () => {
        if (currentDeckIndex + 1 === decks.length) {
            return router.replace('/ironman/celebration');
        }

        setCurrentDeckIndex(
            preivousCurrentDeckIndex => preivousCurrentDeckIndex + 1
        );
    };

    return (
        <div>
            <Head>
                <title>collection - clash royale ironman challenge</title>
                <meta
                    name="description"
                    content="win with every deck you have collected"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">ironman challenge</h1>

                <p>
                    decks{' '}
                    <span className="font-weight-700">
                        {currentDeckIndex + 1}/{decks.length}
                    </span>
                </p>

                <DisplayDeck deck={decks[currentDeckIndex]} />

                <button onClick={handleNextDeck} className="pushable mt-2">
                    <span className="front">
                        {currentDeckIndex + 1 === decks.length
                            ? 'finish'
                            : 'next'}
                    </span>
                </button>
            </div>
        </div>
    );
}
