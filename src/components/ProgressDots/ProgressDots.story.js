import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import ProgressDots from './index.js';

const stories = storiesOf('ProgressDots', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.addWithInfo('default', () => {
    return (
        <ProgressDots testSection="test-progress-dots" />
    )
})