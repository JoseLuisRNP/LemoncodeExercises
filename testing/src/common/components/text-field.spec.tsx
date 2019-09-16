import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TextField} from './text-field';

describe('Text field component specs', () => {
  it('should display a textfield with when it is feed with props', () => {
    //Arrange
    const props = {
      name: 'Textfield name',
      label: 'Textfield label',
      value: 'Textfield value',
      onChange: jest.fn(),
    }
    //Act
    const {getByTestId, asFragment} = render(<TextField {...props} />)
    const textFieldElement = getByTestId('material-textfield');
    //Assert
    expect(textFieldElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange property when the textfield change', () => {
    //Arrange
    const props = {
      name: 'Textfield name',
      label: 'Textfield label',
      value: 'Textfield value',
      onChange: jest.fn(),
    }
    //Act
    const {getByTestId} = render(<TextField {...props} />)
    const textFieldElement = getByTestId('material-textfield');
    fireEvent.change(textFieldElement, { target: { value: "new value" } });
    //Assert
    expect(props.onChange).toHaveBeenCalled();
  });

  it('should call onBlur property when it lose the focus', () => {
    //Arrange
    const props = {
      name: 'Textfield name',
      label: 'Textfield label',
      value: 'Textfield value',
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }
    //Act
    const {getByTestId} = render(<TextField {...props} />)
    const textFieldElement = getByTestId('material-textfield');
    fireEvent.blur(textFieldElement);
    //Assert
    expect(props.onBlur).toHaveBeenCalled();
  });

  it('should appear an error message if error occurs', () => {
    //Arrange
    const props = {
      name: 'Textfield name',
      label: 'Textfield label',
      value: 'Textfield value',
      onChange: jest.fn(),
      error: 'Validate error',
    }
    //Act
    const {getByText} = render(<TextField {...props}/>);
    const errorMessage = getByText(props.error);
    //Assert
    expect(errorMessage.textContent).toEqual(props.error);
  })


})