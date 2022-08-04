import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../components/Nav';

export default function Ironman() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }

        setDecks(JSON.parse(localStorage.getItem('decks')));
    }, []);

    return (
        <div>
            <Head>
                <title>collection - clash royale start ironman challenge</title>
                <meta
                    name="description"
                    content="start the ironman challenge"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">ironman challenge</h1>

                {decks.length >= 2 ? (
                    <React.Fragment>
                        <p>win with every deck you have collected</p>

                        <p className="font-weight-700">{decks.length} decks</p>

                        <Link href="/ironman/challenge">
                            <a className="form-button mt-2 d-inline-block bg-green t-center ">
                                start
                            </a>
                        </Link>
                    </React.Fragment>
                ) : (
                    <p>
                        at least two decks are needed to start the ironman
                        challenge
                    </p>
                )}
            </div>
        </div>
    );
}
