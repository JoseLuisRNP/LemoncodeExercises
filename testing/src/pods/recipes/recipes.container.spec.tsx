import * as React from 'react';
import { State } from 'core/store/root-reducer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {recipesPodReducer} from './store/reducers';
import { RecipesContainer } from './recipes.container';
import * as actions from './store';

describe('pods/recipes container specs', () => {
  it('should render a empty table when its is feed with inital state', () => {
    //Arrange
    const initialState: State = {
      recipesPod: {
        recipes: [],
      },
      router: null
    };

    //Act 
    const {queryAllByTestId} =renderWithRedux(<RecipesContainer/>,{
      initialState,
      reducer: recipesPodReducer
    })
    const recipeElement = queryAllByTestId('recipe');
    //Assert
    expect(recipeElement).toHaveLength(0);
  });

  it('should render a table with one item when its is feed with a state with one item', () => {
    //Arrange
    const initialState: State = {
      recipesPod: {
        recipes: [
          {id:'1', name:'test name', ingredients:['test']}
        ],
      },
      router: null
    };

    //Act 
    const {queryAllByTestId} =renderWithRedux(<RecipesContainer/>,{
      initialState,
      reducer: recipesPodReducer
    })
    const recipeElement = queryAllByTestId('recipe');
    //Assert
    expect(recipeElement).toHaveLength(1);
  });

  it('should execute loadRecipes when mounting', () => {
     //Arrange
     const initialState: State = {
      recipesPod: {
        recipes: [],
      },
      router: null
    };
    const loadRecipesStub = jest.spyOn(actions, 'getRecipesRequest');
    //Act
    renderWithRedux(<RecipesContainer/>,{
      initialState,
      reducer: recipesPodReducer
    });
    //Assert
    expect(loadRecipesStub).toHaveBeenCalled();
  })
});



const renderWithRedux = (
  component, 
  {  initialState = {},  reducer,  store = createStore(reducer, initialState)  }
  ) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store
});