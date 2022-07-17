import Head from 'next/head';

import Nav from '../components/Nav';
import DisplayDecks from '../components/DisplayDecks';

export default function Home() {
    return (
        <div>
            <Head>
                <title>collection - clash royale decks</title>
                <meta
                    name="description"
                    content="collection - clash royale decks"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <DisplayDecks />
            </div>
        </div>
    );
}
