import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Additional helper method to initialize with some sample recipes
  initializeRecipes: () => set({
    recipes: [
      {
        id: 1,
        title: 'Classic Spaghetti Carbonara',
        description: 'Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper'
      },
      {
        id: 2,
        title: 'Chicken Stir Fry',
        description: 'Quick and healthy stir-fried chicken with mixed vegetables'
      }
    ]
  })
}));

export default useRecipeStore;