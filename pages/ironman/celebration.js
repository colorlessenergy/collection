import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Nav from '../../components/Nav';
import Confetti from 'react-confetti';

export default function Celebration() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }

        setDecks(JSON.parse(localStorage.getItem('decks')));
    }, []);

    const [confettiProps, setConfettiProps] = useState({ height: 0, width: 0 });
    useEffect(
        () =>
            setConfettiProps({
                height: window.innerHeight,
                width: window.innerWidth
            }),
        []
    );
    return (
        <div>
            <Head>
                <title>
                    collection - clash royale ironman challenge celebration
                </title>
                <meta
                    name="description"
                    content="congratulations you did the ironman challenge"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">
                    congratulations you did the ironman challenge
                </h1>

                <p>
                    you are a master of all{' '}
                    <span className="font-weight-700">
                        {decks.length} decks
                    </span>
                </p>

                <div className="t-center">
                    <Image
                        src="/elmo.webp"
                        alt="celebration gif"
                        height={360}
                        width={480}
                    />
                </div>

                <Confetti {...confettiProps} />
            </div>
        </div>
    );
}
