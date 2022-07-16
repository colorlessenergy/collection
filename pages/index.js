import Head from 'next/head';

import Nav from '../components/Nav';
import FilterDecks from '../components/FilterDecks';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Collection - clash royale decks</title>
                <meta
                    name="description"
                    content="collection - clash royale decks"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <FilterDecks />
            </div>
        </div>
    );
}
