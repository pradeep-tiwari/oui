import React from 'react';
import OverlayWrapper from '../index';
import Popover from '../../Popover';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const TestButton = (props) => <button onClick={ props.handleClick }>{ props.text }</button>;
const TestPopover = (props) => {
  return (
    <Popover title="Lorem ipsum dolor sit amet">
      <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
    </Popover>
  );
};

describe('components/OverlayWrapper', () => {
  beforeEach(() => {
    spyOn(OverlayWrapper.prototype, 'createTether').and.callThrough();
  });

  afterEach(() => {
    OverlayWrapper.prototype.createTether.calls.reset();
  });

  it('should call function to disable Tether', () => {
    const component = mount(
      <OverlayWrapper
        overlay={ <Popover /> }>
        <TestButton text='just a button' />
      </OverlayWrapper>
    );

    const instance = component.instance();
    spyOn(instance, 'disableTether');
    const initialCallCount = instance.disableTether.calls.count();

    instance.componentDidMount();

    expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
  });

  it('should pass the correct options when none of the layout props are provided', () => {
    const component = mount(
      <OverlayWrapper
        overlay={ <TestPopover /> }>
        <TestButton text='button' />
      </OverlayWrapper>
    );

    const tetherOptions = OverlayWrapper.prototype.createTether.calls.mostRecent().args[0];

    expect(tetherOptions.attachment).toBe('top center');
    expect(tetherOptions.constraints.length).toBe(1);
    expect(tetherOptions.constraints[0]).toEqual({
      attachment: 'together',
      to: 'window',
      pin: false,
    });
  });

  it('should pass the correct options when all the layout props are provided', () => {
    const component = mount(
      <OverlayWrapper
        overlay={ <TestPopover /> }
        horizontalAttachment="center"
        verticalAttachment="top"
        verticalTargetAttachment="top"
        horizontalTargetAttachment="center"
        isConstrainedToScreen={ true }>
        <TestButton text='button' />
      </OverlayWrapper>
    );

    const tetherOptions = OverlayWrapper.prototype.createTether.calls.mostRecent().args[0];

    expect(tetherOptions.attachment).toBe('top center');
    expect(tetherOptions.constraints.length).toBe(1);
    expect(tetherOptions.constraints[0]).toEqual({
      attachment: 'together',
      to: 'window',
      pin: true,
    });
    expect(tetherOptions.targetAttachment).toBe('top center');
    expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(FakeButton).render().children().first()[0].name);
    expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(FakeOverlay).render().children().first()[0].name);
  });
});

  it('should render a Popover component inside', () => {
    const component = mount(
      <OverlayWrapper
        behavior="click"
        overlay={ <TestPopover /> }>
        <TestButton text='button' />
      </OverlayWrapper>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render component with `state.isOverlayOpen=true` when click if click bahavior', () => {
    const component = mount(
      <OverlayWrapper
        behavior="click"
        overlay={ <TestPopover /> }>
        <TestButton text='button' />
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('click');
    expect(component.state().isOverlayOpen).toBe(true);
  });
  it('should render component with `state.isOverlayOpen=true` when hover if hover behavior', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        overlay={ <TestPopover /> }
        shouldHideOnClick={ true }>
        <TestButton text='button' />
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('mouseover');
    expect(component.state().isOverlayOpen).toBe(true);
  });

  it('should render component with `state.isOverlayOpen=false` when clicking escape key', () => {
    const component = mount(
      <OverlayWrapper
        behavior="hover"
        overlay={ <TestPopover /> }
        shouldHideOnClick={ true }>
        <TestButton text='button' />
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
        overlay={ <TestPopover /> }
        shouldHideOnClick={ true }>
        <TestButton text='button' />
      </OverlayWrapper>
    );
    component.find('.click-area').simulate('click');
    component.simulate('keyDown', { keyCode: 40 });
    expect(component.state().isOverlayOpen).toBe(false);
  });

});
