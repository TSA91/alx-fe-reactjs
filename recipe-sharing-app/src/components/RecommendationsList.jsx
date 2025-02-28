import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const isFavorite = useRecipeStore(state => state.isFavorite);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-empty">
        <h2>Recommended Recipes</h2>
        <p>Add some favorites to get personalized recommendations!</p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>Recommended Recipes</h2>
      <div className="recommendations-grid">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recommendation-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recommendation-actions">
              <Link to={`/recipe/${recipe.id}`} className="view-details">
                View Details
              </Link>
              {!isFavorite(recipe.id) && (
                <button 
                  onClick={() => addFavorite(recipe.id)}
                  className="add-favorite"
                >
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;