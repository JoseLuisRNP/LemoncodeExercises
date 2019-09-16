import { renderHook, act } from '@testing-library/react-hooks';
import { useRecipes } from './useRecipes';
import { Recipe } from '../recipes.view-model';

describe('useRecipes specs', () => {
  it('should return a recipes array with the inital recipes and a handleFilter method to filter it ', () => {
    //Arrange
    const initialRecipes:Recipe[] = [
      {id: '1', name:'Salad', ingredients: ['lettuce', 'tomato']},
      {id: '2', name:'Chicken-cheese', ingredients: ['chicken', 'cheese']},
    ]
    //Act
    const {result} = renderHook(() => useRecipes(initialRecipes));
    //Assert
    expect(result.current.filteredRecipes).toEqual(initialRecipes);
    expect(result.current.handleFilter).toEqual(expect.any(Function));

  });

  it('should filter recipes when it call handleFilter with a ingredient to filter', () => {
    //Arrange
    const initialRecipes:Recipe[] = [
      {id: '1', name:'Salad', ingredients: ['lettuce', 'tomato']},
      {id: '2', name:'Chicken-cheese', ingredients: ['chicken', 'cheese', 'tomato']},
    ];
    
    //Act
    const {result} = renderHook(() => useRecipes(initialRecipes));
    act(()=>{
      result.current.handleFilter('cheese');
    })
    
    //Assert
    const expectedRecipes:Recipe[] = [
      {id: '2', name:'Chicken-cheese', ingredients: ['chicken', 'cheese', 'tomato']},
    ]
    expect(result.current.filteredRecipes).toEqual(expectedRecipes);
  });
})