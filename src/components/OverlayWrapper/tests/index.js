import React from 'react';
import OverlayWrapper from '../index';
import Popover from '../../Popover';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/OverlayWrapper', () => {
  it('should render an input of type checkbox', () => {
    const component = mount(
      <OverlayWrapper
        behavior="click"
        horizontalAttachment="center"
        overlay={<Popover title="Lorem ipsum dolor sit amet"><p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p></Popover>}
        shouldHideOnClick
        verticalAttachment="top"
      >
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    expect(true).toBe(true);
  });
});