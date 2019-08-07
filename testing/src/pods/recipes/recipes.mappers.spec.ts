import * as RecipeApi from "./api";
import * as RecipeVM from './recipes.view-model'
import { mapRecipeFromApiToVm } from "./recipes.mappers";

describe('mapper specs', () => {
  it('It should return an empty recipe when the response is undefined', () => {
    //Arrange
    const recipe: RecipeApi.Recipe = undefined;
    const emptyRecipe: RecipeVM.Recipe = RecipeVM.createEmptyRecipe();
    //Act
    const result: RecipeVM.Recipe = mapRecipeFromApiToVm(recipe);
    //Assert
    expect(result).toEqual(emptyRecipe);
  });

  it('It should return an empty recipe when the response is null', () => {
    //Arrange
    const recipe: RecipeApi.Recipe = null;
    const emptyRecipe: RecipeVM.Recipe = RecipeVM.createEmptyRecipe();
    //Act
    const result: RecipeVM.Recipe = mapRecipeFromApiToVm(recipe);
    //Assert
    expect(result).toEqual(emptyRecipe);
  });

  it('It should return a recipe when the response is a recipe', () => {
    //Arrange
    const recipeApi: RecipeApi.Recipe = {
      id: '1',
      name: 'Recipe example',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    }
    const recipeVm: RecipeVM.Recipe = {
      id: '1',
      name: 'Recipe example',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    }
    //Act
    const results: RecipeVM.Recipe = mapRecipeFromApiToVm(recipeApi);
    //Assert
    expect(results).toEqual(recipeVm);
  })
})