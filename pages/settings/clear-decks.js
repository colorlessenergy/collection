import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/Nav';

export default function Cleardecks() {
    const router = useRouter();
    const clearDecks = () => {
        localStorage.setItem('decks', JSON.stringify([]));
        localStorage.setItem('ID', JSON.stringify(0));
        localStorage.setItem('ironmanCompleted', JSON.stringify(0));
        localStorage.setItem('amountOfRolls', JSON.stringify(0));

        router.replace('/settings');
    };

    return (
        <div>
            <Head>
                <title>collection - clear decks</title>
                <meta name="description" content="collection - clear decks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">clear decks</h1>

                <button
                    className="form-button bg-red color-white"
                    onClick={clearDecks}>
                    clear
                </button>
            </div>
        </div>
    );
}
