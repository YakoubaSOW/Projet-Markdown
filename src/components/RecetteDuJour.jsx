import { useState, useEffect } from 'react';
import './assets/RecetteDuJour.css';

const RecetteDuJour = () => {
  const [recette, setRecette] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const fetchRecette = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();

        const randomRecette = data.meals[0];

        setRecette(randomRecette);
      } catch (error) {
        console.error('Erreur lors de la récupération de la recette :', error);
      }
    };

    fetchRecette();
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h2>Recette du Jour:</h2>
      {recette ? (
        <div>
          <p>{recette.strMeal}</p>
          <button onClick={handleOpenModal}>Voir les détails</button>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2>Détails de la recette</h2>
                <h3>Ingrédients</h3>
                <ul>
                  {Object.keys(recette).map(key => {
                    if (key.startsWith('strIngredient') && recette[key]) {
                      return <li key={key}>{recette[key]}</li>;
                    }
                    return null;
                  })}
                </ul>
                <h3>Préparation</h3>
                <p>{recette.strInstructions}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default RecetteDuJour;
