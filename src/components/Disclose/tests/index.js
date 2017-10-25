import React from 'react';
import { shallow } from 'enzyme';
import Disclose from '../index';

const disclose = shallow(<Disclose>un disclose</Disclose>);

describe('Disclose Component', () => {
  it('renders correctly', () => {
    expect(disclose).toMatchSnapshot();
  });
});
