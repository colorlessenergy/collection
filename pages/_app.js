import { useEffect } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem('decks', JSON.stringify([]));
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
