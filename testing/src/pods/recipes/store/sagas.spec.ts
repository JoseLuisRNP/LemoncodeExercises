import { watchRecipesPodSagas, getRecipesRequestSaga } from "./sagas"
import { takeLatest, call, put } from "redux-saga/effects";
import { actionTypes } from "./action-types";
import { getRecipes, Recipe } from "../api";
import { updateRecipes } from ".";

describe('recipes sagas specs', () => {
  describe('watchRecipesPodSagas', () => {
    it('Should wait for actions of type GET_RECIPES_REQUEST and executed the expected worker', () => {
      //Arrange
      const saga = watchRecipesPodSagas();
      const expectedResult = takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga)
      //Act
      const result = saga.next();
      //Assert
      expect(result.value).toEqual(expectedResult);
    })
  });

  describe('getRecipesRequestSaga', () => {
    it('should put updateRecipes with given recipes when API call is successful', () => {
      //Arrange
      const saga = getRecipesRequestSaga();
      const recipes: Recipe[] = [
        {id: '1', name:'test', ingredients:['test']}
      ] 
      //Act & Assert
      expect(saga.next().value).toEqual(call(getRecipes));
      expect(saga.next(recipes).value).toEqual(put(updateRecipes(recipes)));
    });
  });
});