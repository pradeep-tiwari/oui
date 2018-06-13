import React from 'react';
import { mount } from 'enzyme';

import SelectDropdown from './index';

describe('react_components/select_dropdown', function() {
  let component;
  let onChange;

  beforeEach(function() {
    onChange = sinon.spy();
    const items = [
      {
        label: 'label 1',
        value: 'value 1',
        description: 'description 1',
      },
      {
        label: 'label 2',
        value: 'value 2',
        description: 'description 2',
      },
    ];
    component = mount(<SelectDropdown isFilterable={ true } items={ items } value={ 'value 2' } onChange={ onChange } />);
  });

  it('should filter items in dropdown', function() {
    const input = component.find.bind(component, 'Input');
    input().simulate('change', {target: {value: '1'}});

    const listItems = component.find('SelectOption');
    expect(listItems).to.have.length(1);

    const item1 = listItems.at(0);
    expect(item1.text()).to.contain('label 1');
    expect(item1.text()).to.contain('description 1');

    input().simulate('change', {target: {value: 'INVALID_VALUE'}});
    expect(component.find('SelectOption')).to.have.length(0);
  });

  it('should render all items in dropdown', function() {
    const listItems = component.find('SelectOption');
    expect(listItems).to.have.length(2);

    const item1 = listItems.at(0);
    expect(item1.text()).to.contain('label 1');
    expect(item1.text()).to.contain('description 1');
    expect(item1.props().isSelected).to.equal(false);

    const item2 = listItems.at(1);
    expect(item2.text()).to.contain('label 2');
    expect(item2.text()).to.contain('description 2');
    expect(item2.props().isSelected).to.equal(true);
  });

  it('should call onChange when another item is selected', function() {
    const listItems = component.find('DropdownBlockLink');
    const item1 = listItems.at(0).find('[data-test-section="dropdown-block-link-value 1"]');
    item1.simulate('click');
    sinon.assert.calledOnce(onChange);
    sinon.assert.calledWithExactly(onChange, 'value 1');
  });
});
