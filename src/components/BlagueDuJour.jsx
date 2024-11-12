import {useEffect, useState} from 'react';

function BlagueDuJour() {
    const [blague, setBlague] = useState('');

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => setBlague(`${data.setup} - ${data.punchline}`))
            .catch(error => console.error('Erreur :', error));
    }, []);

    return (
        <div>
            <h2>Blague Du Jour:</h2>
            {blague}
        </div>
    );
}

export default BlagueDuJour;
