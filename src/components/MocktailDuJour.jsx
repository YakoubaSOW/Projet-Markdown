import { useState, useEffect } from 'react';
import './assets/MocktailDuJour.css';

const MocktailDuJour = () => {
  const [mocktail, setMocktail] = useState(null);

  useEffect(() => {
    
    const fetchMocktail = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        const data = await response.json();

        const drinks = data.drinks;

        const randomIndex = Math.floor(Math.random() * drinks.length);
        const randomMocktail = drinks[randomIndex];

        setMocktail(randomMocktail);
      } catch (error) {
        console.error('Erreur lors de la récupération des mocktails :', error);
      }
    };

    fetchMocktail();
  }, []); 

  return (
    <div className={"mocktailContent"}>
      <h2>Mocktail du Jour</h2>
      {mocktail ? (
        <div>
          <p>{mocktail.strDrink}</p>
          <img src={mocktail.strDrinkThumb} alt={mocktail.strDrink} width="100" />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default MocktailDuJour;
