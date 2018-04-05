import React from 'react';
import RangeSlider from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Toggle', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <RangeSlider />
    );
  });

  it('should render component same as snapshot', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render component with correct props', () => {
    expect(component.length).toBe(1);
  });

});
