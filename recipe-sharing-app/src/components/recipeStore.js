import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Existing actions
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, {
      ...newRecipe,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }];
    return {
      recipes: updatedRecipes,
      filteredRecipes: get().filterRecipesByTerm(updatedRecipes, state.searchTerm)
    };
  }),

  // Search and filter actions
  setSearchTerm: (term) => {
    set((state) => ({
      searchTerm: term,
      filteredRecipes: get().filterRecipesByTerm(state.recipes, term)
    }));
  },

  filterRecipesByTerm: (recipes, term) => {
    const searchTerm = term.toLowerCase();
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm)
    );
  },

  // Initialize recipes with filtering
  initializeRecipes: () => {
    const initialRecipes = [
      {
        id: 1,
        title: 'Classic Spaghetti Carbonara',
        description: 'Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Chicken Stir Fry',
        description: 'Quick and healthy stir-fried chicken with mixed vegetables',
        createdAt: new Date().toISOString()
      }
    ];
    set({
      recipes: initialRecipes,
      filteredRecipes: initialRecipes
    });
  }
}));

export default useRecipeStore;