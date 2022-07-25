import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../components/Nav';
import DisplayDeck from '../components/DisplayDeck';

import { getCard } from '../utilities/cards';

export default function AddDeck() {
    const [formInputs, setFormInputs] = useState({
        title: '',
        link: '',
        cards: []
    });

    const handleInputChange = event => {
        setFormInputs({
            ...formInputs,
            [event.target.id]: event.currentTarget.value
        });
    };

    const handlePaste = event => {
        let link = event.clipboardData.getData('Text');
        let cardIDs = link.match(/\d+/g);
        if (!cardIDs) {
            return;
        }
        if (cardIDs.length > 8) {
            cardIDs.splice(8);
            link = `https://link.clashroyale.com/deck/en?deck=${cardIDs.join(
                ';'
            )}`;
        }

        const cards = cardIDs.map(cardID => {
            return getCard(cardID);
        });

        setFormInputs({
            ...formInputs,
            link,
            cards
        });
    };

    const [formValidation, setFormValidation] = useState({
        title: '',
        cards: ''
    });
    const router = useRouter();
    const handleSubmit = event => {
        event.preventDefault();
        let formValidation = {
            title: '',
            cards: ''
        };

        if (formInputs.title.trim().length === 0) {
            formValidation.title = 'title is missing';
        }

        if (formInputs.cards.length !== 8) {
            formValidation.cards = 'deck has to have 8 cards';
        }

        if (formValidation.title || formValidation.cards) {
            return setFormValidation(formValidation);
        }

        let ID = JSON.parse(localStorage.getItem('ID'));
        ID += 1;
        localStorage.setItem('ID', JSON.stringify(ID));

        let decks = JSON.parse(localStorage.getItem('decks'));
        decks.push({
            ID,
            ...formInputs,
            title: formInputs.title.trim(),
            link: formInputs.link.trim()
        });
        localStorage.setItem('decks', JSON.stringify(decks));

        router.replace('/');
    };

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
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        placeholder="title"
                        id="title"
                        value={formInputs.title}
                        onChange={handleInputChange}
                    />
                    {formValidation.title ? (
                        <p className="my-0 mt-1 color-light-red">
                            {formValidation.title}
                        </p>
                    ) : null}

                    <label className="mt-2" htmlFor="link">
                        link
                    </label>
                    <input
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
