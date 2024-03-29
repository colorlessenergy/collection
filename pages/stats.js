import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Nav from '../components/Nav';
import { cards, countAmountOfCards } from '../utilities/cards';

export default function Stats() {
    const [cardCount, setCardCount] = useState({});
    const [ironmanCompleted, setIronmanCompleted] = useState(0);
    const [amountOfRolls, setAmountOfRolls] = useState(0);

    useEffect(() => {
        setCardCount(countAmountOfCards());

        setIronmanCompleted(localStorage.getItem('ironmanCompleted'));

        setAmountOfRolls(localStorage.getItem('amountOfRolls'));
    }, []);

    return (
        <div>
            <Head>
                <title>collection - stats</title>
                <meta
                    name="description"
                    content="collection - clash royale deck stats"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />
                <h1 className="my-2">stats</h1>

                <h2>ironman</h2>
                <p className="stats-text">
                    amount of times completed:{' '}
                    <span className="font-weight-700">{ironmanCompleted}</span>
                </p>

                <h2>roll deck</h2>
                <p className="stats-text">
                    amount of times rolled:{' '}
                    <span className="font-weight-700">{amountOfRolls}</span>
                </p>

                <h2>cards</h2>
                <div className="card-images-container">
                    {cards
                        .sort((a, b) => {
                            a = cardCount[a.id] || 0;
                            b = cardCount[b.id] || 0;

                            return b - a;
                        })
                        .map(card => {
                            return (
                                <div
                                    key={card.id}
                                    className="card-image card-image--stats mb-1">
                                    <div className="card-number">
                                        {cardCount[card.id]
                                            ? cardCount[card.id]
                                            : 0}
                                    </div>

                                    <Image
                                        src={`/cards/${card.key}.png`}
                                        alt={card.name}
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
        </div>
    );
}
