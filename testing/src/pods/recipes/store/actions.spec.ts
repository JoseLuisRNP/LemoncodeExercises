import {getRecipesRequest, updateRecipes} from './actions';
import {actionTypes} from './action-types';
import { Recipe } from '../recipes.view-model';
describe('actions specs', () => {
  describe('getRecipesRequest', () => {
    it('should return an action with type GET_RECIPES_REQUEST', () => {
      //Arrange

      //Act
      const result = getRecipesRequest();
      //Assert
      expect(result.type).toBe(actionTypes.GET_RECIPES_REQUEST);
    })
  });
  describe('updateRecipes', () => {
    it('should return an action with type UPDATE_RECIPES and payload with the given recipes ', () => {
      //Arrange
      const recipes:Recipe[] = [
        {id:'1', name:'test recipe', ingredients:['test', 'ingredients']}
      ]
      //Act
      const result = updateRecipes(recipes);
      //Assert
      expect(result.type).toBe(actionTypes.UPDATE_RECIPES);
      expect(result.payload).toBe(recipes);

    })
  })
})