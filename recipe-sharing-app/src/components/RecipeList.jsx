import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  if (filteredRecipes.length === 0) {
    return (
      <div className="no-results">
        {searchTerm ? (
          <p>No recipes found matching "{searchTerm}"</p>
        ) : (
          <p>No recipes available. Add your first recipe!</p>
        )}
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="view-details">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;