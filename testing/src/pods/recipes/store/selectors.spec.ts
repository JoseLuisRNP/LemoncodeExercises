import { State } from "core/store/root-reducer"
import { getRecipesPodState, getRecipesSelector } from "./selectors"

describe('store/selectors specs', () => {
  describe('getRecicipesPodState', () => {
    it('should return the expected recipesPod', () => {
      //Arrange
      const state: State = {
        recipesPod: {
          recipes: [],
        },
        router: null,
      }
      //Act
      const result = getRecipesPodState(state);
      //Assert
      expect(result).toEqual(state.recipesPod);
    })
  });
  describe('getRecipesSelector', () => {
    it('should return the expect recipes list from pod', () => {
      //Arrange
      const state: State = {
        recipesPod: {
          recipes: [],
        },
        router: null,
      }
      //Act
      const result = getRecipesSelector(state);
      //Assert
      expect(result).toEqual(state.recipesPod.recipes);
    })
  })
})