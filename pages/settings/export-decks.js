import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/Nav';

export default function ExportDecks() {
    const router = useRouter();
    const exportDecks = () => {
        const decks = localStorage.getItem('decks');
        const ironmanCompleted = localStorage.getItem('ironmanCompleted');
        const amountOfRolls = localStorage.getItem('amountOfRolls');

        const data = {
            decks,
            ironmanCompleted,
            amountOfRolls
        };

        const filename = 'clash-royale-decks.json';
        let anchorElement = document.createElement('a');
        anchorElement.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' +
                encodeURIComponent(JSON.stringify(data))
        );
        anchorElement.setAttribute('download', filename);
        anchorElement.style.display = 'none';
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);

        router.replace('/settings');
    };

    return (
        <div>
            <Head>
                <title>collection - export decks</title>
                <meta name="description" content="collection - export decks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">export decks</h1>

                <button
                    className="form-button bg-light-red"
                    onClick={exportDecks}>
                    export
                </button>
            </div>
        </div>
    );
}
