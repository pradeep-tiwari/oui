/* eslint-disable react/jsx-key */
import React from 'react';
import Dropdown from '../index';

export default [
  {
    examples: [
      <Dropdown
        isDisabled={ false }
        isOpen={ true }
        fullWidth={ false }
        style='highlight'
        text='Dropdown'
        width='300px'>
        <ul className="oui-dropdown width--200">
          <li key="1" className="oui-dropdown__item">
            <a key="a" className="oui-dropdown__block-link">Manage Collaborators</a>
            <a key="b" className="oui-dropdown__block-link">Manage This Thing</a>
          </li>
          <li key="2" className="oui-dropdown__item">
            <a key="c" className="oui-dropdown__block-link">Experiment Change History</a>
          </li>
        </ul>
      </Dropdown>
    ],
  },
];
