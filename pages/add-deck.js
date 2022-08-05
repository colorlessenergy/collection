import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../components/Nav';
import DisplayDeck from '../components/DisplayDeck';

export default function AddDeck() {
    const [formInputs, setFormInputs] = useState({
        link: '',
        cards: []
    });

    const handlePaste = event => {
        let link = event.clipboardData.getData('Text');
        let cardsIDs = link.match(/\d+/g);
        if (!cardsIDs) {
            return;
        }
        if (cardsIDs.length > 8) {
            cardsIDs.splice(8);
            link = `https://link.clashroyale.com/deck/en?deck=${cardsIDs.join(
                ';'
            )}`;
        }

        setFormInputs({
            ...formInputs,
            link,
            cards: cardsIDs
        });
    };

    const [formValidation, setFormValidation] = useState({
        cards: ''
    });
    const router = useRouter();
    const handleSubmit = event => {
        event.preventDefault();
        let formValidation = {
            cards: ''
        };

        if (formInputs.cards.length !== 8) {
            formValidation.cards = 'deck has to have 8 cards';

            return setFormValidation(formValidation);
        }

        let ID = JSON.parse(localStorage.getItem('ID'));
        ID += 1;
        localStorage.setItem('ID', JSON.stringify(ID));

        let decks = JSON.parse(localStorage.getItem('decks'));
        decks.push({
            ID,
            ...formInputs,
            link: formInputs.link.trim()
        });
        localStorage.setItem('decks', JSON.stringify(decks));

        router.replace('/');
    };

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <Head>
                <title>collection - add clash royale deck</title>
                <meta
                    name="description"
                    content="collection - clash royale decks"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Nav />

                <h1 className="my-2">add deck</h1>

                <form onSubmit={handleSubmit}>
                    <label className="d-block mt-2 mb-1" htmlFor="link">
                        link
                    </label>
                    <input
                        ref={inputRef}
                        className="mb-2"
                        type="text"
                        placeholder="link"
                        id="link"
                        onPaste={handlePaste}
                        autoComplete="off"
                    />

                    <div>cards</div>
                    <DisplayDeck
                        deck={
                            formInputs.cards.length
                                ? { cards: formInputs.cards }
                                : null
                        }
                    />
                    {formInputs.cards.length ? (
                        <React.Fragment>
                            {formValidation.cards ? (
                                <p className="my-0 color-light-red">
                                    {formValidation.cards}
                                </p>
                            ) : null}

                            <div className="t-right">
                                <button className="form-button bg-green color-white">
                                    add deck
                                </button>
                            </div>
                        </React.Fragment>
                    ) : null}
                </form>
            </div>
        </div>
    );
}
