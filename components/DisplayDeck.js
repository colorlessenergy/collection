import Image from 'next/image';

import { getAverageElixir } from '../utilities/cards';

const DisplayDeck = ({ deck = null, handleDeleteDeck = null }) => {
    if (!deck) {
        return (
            <div className="deck-images-container mb-2">
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="deck-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
            </div>
        );
    }

    const averageElixir = getAverageElixir(deck.cards);

    return (
        <div className="mt-1 deck-container">
            <div className="deck-header">
                <div className="font-size-2">
                    <span className="font-weight-700">{averageElixir}</span>{' '}
                    average elixir
                </div>

                <div>
                    {handleDeleteDeck ? (
                        <button
                            onClick={() => handleDeleteDeck(deck.ID)}
                            title="delete deck"
                            className="mr-1">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24">
                                <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" />
                            </svg>
                        </button>
                    ) : null}

                    {deck.link ? (
                        <a href={deck.link} title="copy deck">
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24">
                                <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2z" />
                            </svg>
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="deck-images-container">
                {deck.cards.map(card => {
                    return (
                        <div key={card.id} className="deck-image">
                            <Image
                                src={`/cards/${card.key}.png`}
                                alt={card.name}
                                layout="responsive"
                                width="80"
                                height="96"
                                title={card.name}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DisplayDeck;
