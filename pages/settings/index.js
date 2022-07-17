import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../components/Nav';

export default function Settings() {
    return (
        <div>
            <Head>
                <title>Collection - settings</title>
                <meta name="description" content="collection - settings" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">settings</h1>

                <ul className="my-2 font-size-2">
                    <li className="mb-1">
                        <Link href="/settings/import-decks">
                            <a>import decks</a>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link href="/settings/export-decks">
                            <a>export decks</a>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link href="/settings/clear-decks">
                            <a>clear decks</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
