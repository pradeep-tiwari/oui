import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { WithNotes } from '@storybook/addon-notes';

import ProgressBar from '../ProgressBar';

const stories = storiesOf('ProgressBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
        {story()}
    </div>
  ));

stories
  .addWithInfo('states of pb', () => <ProgressBar
        max={ number('max', 100) }
        min={ number('min', 0) }
        progress={ number('progress', 60) }
        topLabel={ text('topLabel', 'hola esto es un label') }
        leftLabel={ text('leftLabel','Allocated traffic') }
        rightLabel={ text('rightLabel','Available traffic') }
    />)

