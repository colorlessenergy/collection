import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/Nav';

export default function ImportDecks() {
    const router = useRouter();
    const importDecks = event => {
        const reader = new FileReader();
        reader.onload = e => {
            let importedDecks = JSON.parse(e.target.result);
            let ID = JSON.parse(localStorage.getItem('ID'));
            importedDecks = importedDecks.map(deck => {
                ID += 1;
                return {
                    ...deck,
                    ID
                };
            });
            localStorage.setItem('ID', ID);

            const decksFromLocalStorage = JSON.parse(
                localStorage.getItem('decks')
            );
            const combineDecks = [...decksFromLocalStorage, ...importedDecks];
            localStorage.setItem('decks', JSON.stringify(combineDecks));

            router.replace('/settings');
        };

        reader.readAsText(event.target.files[0]);
    };

    const setValueToNull = event => {
        event.target.value = null;
    };

    return (
        <div>
            <Head>
                <title>collection - import decks</title>
                <meta name="description" content="collection - import decks" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">import decks</h1>

                <label
                    htmlFor="import-data"
                    className="form-button d-inline-block bg-green cursor-pointer">
                    import decks
                </label>
                <input
                    type="file"
                    id="import-data"
                    accept=".json"
                    onChange={importDecks}
                    onClick={setValueToNull}
                    className="d-none"
                />
            </div>
        </div>
    );
}
