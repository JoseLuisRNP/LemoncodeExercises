import deepFreeze from 'deep-freeze';
import { BaseAction } from "common/types"
import { recipesPodReducer, RecipesPodState } from "./reducers"
import { actionTypes } from './action-types';
import { Recipe } from '../recipes.view-model';

describe('reducers specs', () => {
  it('Should return the expected initial state when passing state as undefined', () => {
    //Arrange
    const action:BaseAction = {
      type: 'INIT',
      payload: null,
    }
    //Act
    const result = recipesPodReducer(undefined, action);
    //Assert
    expect(result.recipes).toEqual([]);
  })
  it('should update recipes with given payload when the type is UPDATE_RECIPES', () => {
    //Arrange
    const state: RecipesPodState = {
      recipes: [],
    }
    deepFreeze(state);
    const recipes:Recipe[] = [{id:'1', name:'test name', ingredients: ['test', 'ingredients']}]
    const action:BaseAction = {
      type: actionTypes.UPDATE_RECIPES,
      payload: recipes,
    }
    //Act
    const result = recipesPodReducer(state, action);
    //Assert
    expect(result.recipes).toEqual(recipes);
  });
  it('should return the given state if action type is unknown', () => {
    //Arrange
    const state: RecipesPodState = {
      recipes: [],
    } 
    deepFreeze(state);
    const action:BaseAction = {
      type: 'Unknown action',
      payload: null,
    }
    //Act
    const result = recipesPodReducer(state, action);
    //Assert
    expect(result).toEqual(state);
  })
})