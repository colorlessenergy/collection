import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/Nav';

import {
    importAmountOfRolls,
    importDecks,
    importIronmanCompleted
} from '../../utilities/localStorage';

export default function ImportData() {
    const router = useRouter();
    const importData = event => {
        const reader = new FileReader();
        reader.onload = e => {
            const data = JSON.parse(e.target.result);
            importDecks(JSON.parse(data.decks));
            importIronmanCompleted(JSON.parse(data.ironmanCompleted));
            importAmountOfRolls(JSON.parse(data.amountOfRolls));

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
                <title>collection - import data</title>
                <meta name="description" content="collection - import data" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">import data</h1>

                <label
                    htmlFor="import-data"
                    className="form-button d-inline-block bg-green cursor-pointer">
                    import data
                </label>
                <input
                    type="file"
                    id="import-data"
                    accept=".json"
                    onChange={importData}
                    onClick={setValueToNull}
                    className="d-none"
                />
            </div>
        </div>
    );
}
