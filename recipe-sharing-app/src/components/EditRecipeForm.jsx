import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {  // Changed from 'e' to 'event'
    event.preventDefault();  // Changed from 'e.preventDefault()' to 'event.preventDefault()'
    updateRecipe(recipe.id, { title, description });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)} className="edit-button">
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <div className="form-group">
        <label htmlFor="title">Recipe Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <div className="button-group">
        <button type="submit">Save Changes</button>
        <button 
          type="button" 
          onClick={() => setIsEditing(false)}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;