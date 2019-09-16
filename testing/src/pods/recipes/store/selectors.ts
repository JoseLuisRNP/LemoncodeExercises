import { createSelector } from 'reselect';
import { State } from 'core/store/root-reducer';

export const getRecipesPodState = (state: State) => state.recipesPod;

export const getRecipesSelector = createSelector(
  getRecipesPodState,
  pod => pod.recipes
);
