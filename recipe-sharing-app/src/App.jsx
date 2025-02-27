import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './store/recipeStore';
import './App.css';

function App() {
  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);

  useEffect(() => {
    initializeRecipes();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      
      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;