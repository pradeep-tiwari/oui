import React from 'react';
import OverlayWrapper from '../index';
import Popover from '../../Popover';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/OverlayWrapper', () => {
  it('should render a Popover component inside', () => {
    const component = mount(
      <OverlayWrapper
        behavior="click"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should render component with `state.isOverlayOpen=true` when click if click bahavior', () => {
    const component = mount(
      <OverlayWrapper
        behavior="click"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('click');
    expect(component.state().isOverlayOpen).toBe(true);
  });
  it('should render component with `state.isOverlayOpen=true` when hover if hover behavior', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('mouseover');
    expect(component.state().isOverlayOpen).toBe(true);
  });
  it('should render component with `state.isOverlayOpen=false` when clicking escape key', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('click');
    component.simulate('keyDown', { keyCode: 40 });
    expect(component.state().isOverlayOpen).toBe(false);
  });
  it('should call prop function on click', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('click');
    component.simulate('keyDown', { keyCode: 40 });
    expect(component.state().isOverlayOpen).toBe(false);
  });
  it('should instantiate OverlayWrapper', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        horizontalAttachment="left"
        horizontalTargetAttachment="left"
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="top"
        verticalTargetAttachment="bottom">
        <button>
          Open Popover
        </button>
      </OverlayWrapper>
    );
    const inst = component.instance();
    expect(inst).toEqual.instanceOf(component);
  });
});
