import { useEffect, useState } from 'react';
import './assets/EvenementHistorique.css';

function EvenementHistorique() {
    const [Evenement, setEvenement] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://history.muffinlabs.com/date')
            .then(response => response.json())
            .then(data => {
                const eventsToday = data.data.Events;
                setEvenement(eventsToday);
            })
            .catch(error => console.error('Erreur :', error));
    }, []);

    const boutonPrecedent = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : Evenement.length - 1));
    };

    const boutonSuivent = () => {
        setCurrentIndex((prevIndex) => (prevIndex < Evenement.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div>
            <h2>Événements historiques</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {Evenement.length > 0 && (
                    <li>{Evenement[currentIndex].year}: {Evenement[currentIndex].text}</li>
                )}
            </ul>
            <button onClick={boutonPrecedent}>Previous</button>
            <button onClick={boutonSuivent}>Next</button>
        </div>
    );
}

export default EvenementHistorique;