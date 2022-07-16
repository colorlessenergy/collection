import Head from 'next/head';
import Image from 'next/image';

import Nav from '../components/Nav';

const cards = [
    {
        key: 'knight',
        name: 'Knight',
        id: 26000000
    },
    {
        key: 'archers',
        name: 'Archers',
        id: 26000001
    },
    {
        key: 'goblins',
        name: 'Goblins',
        id: 26000002
    },
    {
        key: 'giant',
        name: 'Giant',
        id: 26000003
    },
    {
        key: 'pekka',
        name: 'P.E.K.K.A',
        id: 26000004
    },
    {
        key: 'minions',
        name: 'Minions',
        id: 26000005
    },
    {
        key: 'balloon',
        name: 'Balloon',
        id: 26000006
    },
    {
        key: 'witch',
        name: 'Witch',
        id: 26000007
    }
];

export default function addDeck() {
    return (
        <div>
            <Head>
                <title>Collection - add clash royale deck</title>
                <meta
                    name="description"
                    content="collection - clash royale decks"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />
                <form>
                    <label htmlFor="title">title</label>
                    <input
                        className="mb-2"
                        type="text"
                        placeholder="title"
                        id="title"
                    />

                    <label htmlFor="link">link</label>
                    <input
                        className="mb-2"
                        type="text"
                        placeholder="link"
                        id="link"
                    />

                    <div>cards</div>
                    <div className="deck-images-container">
                        {cards.map(card => {
                            return (
                                <div className="deck-image">
                                    <Image
                                        src={`/cards/${card.key}.png`}
                                        layout="responsive"
                                        width="80"
                                        height="96"
                                        title={card.name}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="t-right">
                        <button className="bg-green color-white">
                            add deck
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
