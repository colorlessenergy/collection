import Head from 'next/head';
import Link from 'next/link';

import Nav from '../../components/Nav';

export default function Settings() {
    return (
        <div>
            <Head>
                <title>collection - settings</title>
                <meta name="description" content="collection - settings" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">settings</h1>

                <ul className="my-2 font-size-2">
                    <li className="mb-1">
                        <Link href="/settings/import-data">
                            <a>import data</a>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link href="/settings/export-data">
                            <a>export data</a>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link href="/settings/clear-data">
                            <a>clear data</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
