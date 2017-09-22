/* eslint-disable react/jsx-key */
import React from 'react';
import Dropdown from '../index';

export default [
  {
    examples: [
      <Dropdown
        classname='chilito'
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
        text={ text('text', 'Dropdown') }
        width={ number('width', 300) }>
        <ul className="lego-dropdown width--200" style={{display: 'block'}}>
          <li key="1" className="lego-dropdown__item">
            <a key="a" onClick={ action('clicked on link 1') } className="lego-dropdown__block-link">Manage Collaborators</a>
            <a key="b" onClick={ action('clicked on link 2') } className="lego-dropdown__block-link">Manage This Thing</a>
          </li>
          <li key="2" className="lego-dropdown__item">
            <a key="c" onClick={ action('clicked on link 3') } className="lego-dropdown__block-link">Experiment Change History</a>
          </li>
        </ul>
      </Dropdown>
    ],
  },
];
