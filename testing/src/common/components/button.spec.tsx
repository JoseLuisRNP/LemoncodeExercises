import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button specs', () => {
  it('should display a Button component with label when it feeds a label', () => {
    //Arrange
    const props = {
      label: 'Button label',
    }
    //Act
    const {getByText} = render(<Button {...props}/>);

    const buttonElement = getByText(props.label);
    //Arrange
    expect(buttonElement).not.toBeUndefined();
  });


  it('should be type submit when it doesn\'t feed a type prop', () => {
    //Arrange
    const props = {
      label: 'Button label',
      onClick: jest.fn(),
    }
    //Act
    const {getByTestId} = render(<Button {...props}/>);

    const buttonElement = getByTestId('material-button') as HTMLButtonElement;
    //Arrange
    expect(buttonElement.type).toEqual('submit');
  });

  it('should be the type that it feeds a type prop', () => {
    //Arrange
    const props = {
      label: 'Button label',
      type: 'button' as 'button' | 'submit' | 'reset',
      onClick: jest.fn(),
    }
    //Act
    const {getByTestId} = render(<Button {...props}/>);

    const buttonElement = getByTestId('material-button') as HTMLButtonElement;
    //Arrange
    expect(buttonElement.type).toEqual('button');
  });

  it('should call onClick when the button component is clicked', () => {
    //Arrange
    const props = {
      label: 'Button label',
      onClick: jest.fn(),
    }
    //Act
    const {getByTestId} = render(<Button {...props}/>);

    const buttonElement = getByTestId('material-button');
    fireEvent.click(buttonElement);
    //Arrange
    expect(props.onClick).toHaveBeenCalled();
  });
});
