import React from 'react';
import Poptip from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Poptip', () => {
  it('renders correctly', () => {
    const component = shallow(<Poptip content="Really interesting info!">Testing Poptip</Poptip>);
    component.props().setBodyDefined(true);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should call the callback onClick', () => {
    const mockCallBack = jest.fn();
    const component = shallow(
      <Poptip content="Really interesting info!"><button onClick={ mockCallBack }>Testing Poptip</button></Poptip>
    );
    component.props().setBodyDefined(true);
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should call the callback onMouseOver', () => {
    const mockCallBack = jest.fn();
    const component = shallow(
      <Poptip content="Really interesting info!"><button onMouseOver={ mockCallBack }>Testing Poptip</button></Poptip>
    );
    component.props().setBodyDefined(true);
    component.find('button').simulate('mouseover');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
