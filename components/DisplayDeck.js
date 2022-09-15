import Image from 'next/image';

import { getAverageElixir, getCard } from '../utilities/cards';

const DisplayDeck = ({ deck = null, handleDeleteDeck = null }) => {
    if (!deck) {
        return (
            <div className="card-images-container mb-2">
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
                    <Image
                        src="/placeholder.png"
                        alt="placeholder"
                        layout="responsive"
                        width="80"
                        height="96"
                        title="placeholder"
                    />
                </div>
                <div className="card-image">
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
        <div className="mt-1">
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
                                className="icon fill-red"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24">
                                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
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
                                <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z" />
                            </svg>
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="card-images-container">
                {deck.cards.map(cardID => {
                    const card = getCard(cardID);
                    return (
                        <div key={card.id} className="card-image">
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
