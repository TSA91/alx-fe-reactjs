import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Favorites actions
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  isFavorite: (recipeId) => get().favorites.includes(recipeId),

  // Recommendations action
  generateRecommendations: () => set(state => {
    const userFavorites = state.favorites;
    const recommendations = state.recipes.filter(recipe => 
      !userFavorites.includes(recipe.id) && 
      userFavorites.some(favId => {
        const favRecipe = state.recipes.find(r => r.id === favId);
        return favRecipe && recipe.title.toLowerCase().includes(favRecipe.title.toLowerCase());
      })
    );
    return { recommendations };
  }),

  // Existing actions remain the same...
}));

export default useRecipeStore;