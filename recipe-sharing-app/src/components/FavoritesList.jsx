import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const favoriteRecipes = recipes.filter(recipe => 
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>My Favorites</h2>
        <p>You haven't added any favorites yet!</p>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h2>My Favorites</h2>
      <div className="favorites-grid">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="favorite-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="favorite-actions">
              <Link to={`/recipe/${recipe.id}`} className="view-details">
                View Details
              </Link>
              <button 
                onClick={() => removeFavorite(recipe.id)}
                className="remove-favorite"
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;