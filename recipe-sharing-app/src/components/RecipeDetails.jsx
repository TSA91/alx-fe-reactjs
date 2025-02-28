import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const isFavorite = useRecipeStore(state => state.isFavorite(recipeId));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div className="recipe-details">
      <button onClick={() => navigate('/')} className="back-button">
        Back to Recipes
      </button>
      
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Created: {new Date(recipe.createdAt).toLocaleDateString()}</p>
      
      <button 
        onClick={toggleFavorite}
        className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
      >
        {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
      </button>
      
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;