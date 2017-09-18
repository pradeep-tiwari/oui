import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown from './index.js';
import BlockList from '../BlockList';

const stories = storiesOf('Dropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.addWithInfo('default', () => {
  return (
    <Dropdown
      icon='chevron'
      isDisabled={ boolean('isDisabled', false) }
      isOpen={ boolean('isOpen', false) }
      fullWidth={ boolean('fullWidth', false) }
      handleClick={ action('dropdown clicked') }
      style={ select('style', {
        default: 'default',
        highlight: 'highlight',
        danger: 'danger',
        'danger-outline': 'danger-outline', 
        outline: 'outline',
        underline: 'underline'}, '') }
      text='Dropdown'
      width={ number('width', 300) }>
      <ul className="lego-dropdown width--200" style={{display: 'block'}}>
        <li className="lego-dropdown__item">
          <a href="#" className="lego-dropdown__block-link">Manage Collaborators</a>
          <a href="#" className="lego-dropdown__block-link">Manage This Thing</a>
        </li>
        <li className="lego-dropdown__item">
          <a href="#" className="lego-dropdown__block-link">Experiment Change History</a>
        </li>
      </ul>
    </Dropdown>
  );
});

stories.addWithInfo('with BlockList elements', () => {
  return (
    <Dropdown
      isDisabled={ boolean('isDisabled', false) }
      isOpen={ boolean('isOpen', false) }
      fullWidth={ boolean('fullWidth', false) }
      handleClick={ action('dropdown clicked') }
      style={ select('style', {
        default: 'default',
        highlight: 'highlight',
        danger: 'danger',
        'danger-outline': 'danger-outline', 
        outline: 'outline',
        underline: 'underline'}, '') }
      text='Dropdown'
      width={ number('width', 300) }>
      <BlockList style={{ top: 100 }}>
        <BlockList.Category>
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <div>Manual</div>
                <div className="muted micro">Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices</div>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category header="Automation">
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <div>Maximize Conventions</div>
                <div className="muted micro">Bocconcini stinking bishop port-salut. Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.</div>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category>
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <div>Faster Results</div>
                <div className="muted micro">Cauliflower cheese stilton paneer hard cheese fondue.</div>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>
    </Dropdown>
  );
});
