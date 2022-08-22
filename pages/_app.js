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

        if (!localStorage.getItem('ironmanCompleted')) {
            localStorage.setItem('ironmanCompleted', JSON.stringify(0));
        }
    }, []);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            'serviceWorker' in navigator &&
            window.workbox !== undefined
        ) {
            const wb = window.workbox;
            const installNewVersion = () => {
                wb.addEventListener('controlling', () => {
                    window.location.reload();
                });

                wb.messageSkipWaiting();
            };

            wb.addEventListener('waiting', installNewVersion);
            wb.register();
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
