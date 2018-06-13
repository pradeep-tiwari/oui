import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import SelectDropdown from './index.js';

const stories = storiesOf('SelectDropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  const items = [
    {
      label: 'Cat',
      description: 'A small feline.',
      value: 'cat',
    },
    {
      label: 'Dog',
      description: 'Not a bear.',
      value: 'dog',
    },
    {
      label: 'Bear',
      description: 'Likes honey',
      value: 'bear',
    },
    {
      label: 'Squirrel',
      description: 'Smarter than it looks',
      value: 'squirrel',
    },
  ];

  return (
    <SelectDropdown
      items={ items }
      value={ 'dog' }
      onChange={ action('SelectDropdown value changed') }
    />
  );
}));
