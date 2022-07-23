import Head from 'next/head';

import Nav from '../components/Nav';
import DisplayDeck from '../components/DisplayDeck';

export default function Roll() {
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

                <DisplayDeck />

                <button className="pushable" href="/add-deck">
                    <span className="front">ROLL</span>
                </button>
            </div>
        </div>
    );
}
