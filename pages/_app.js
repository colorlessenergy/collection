import { useEffect } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('decks')) {
            localStorage.setItem(
                'decks',
                JSON.stringify([
                    {
                        ID: 1,
                        link: 'https://link.clashroyale.com/deck/en?deck=27000000;28000000;26000021;26000038;26000030;26000014;26000010;28000011',
                        cards: [
                            '27000000',
                            '28000000',
                            '26000021',
                            '26000038',
                            '26000030',
                            '26000014',
                            '26000010',
                            '28000011'
                        ]
                    },
                    {
                        ID: 2,
                        link: 'https://link.clashroyale.com/deck/en?deck=27000000;26000040;28000004;26000030;26000065;28000003;26000019;28000011',
                        cards: [
                            '27000000',
                            '26000040',
                            '28000004',
                            '26000030',
                            '26000065',
                            '28000003',
                            '26000019',
                            '28000011'
                        ]
                    }
                ])
            );
        }

        if (!localStorage.getItem('ID')) {
            localStorage.setItem('ID', JSON.stringify(2));
        }

        if (!localStorage.getItem('ironmanCompleted')) {
            localStorage.setItem('ironmanCompleted', JSON.stringify(0));
        }

        if (!localStorage.getItem('amountOfRolls')) {
            localStorage.setItem('amountOfRolls', JSON.stringify(0));
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
