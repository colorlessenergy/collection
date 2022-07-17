import { useEffect } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }

        if (!localStorage.getItem('ID')) {
            localStorage.setItem('ID', JSON.stringify(0));
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
