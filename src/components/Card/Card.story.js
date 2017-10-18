import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Card from '../Card';

const typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning',
};

const stories = storiesOf('Card', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ));

stories
  .add('card states', withInfo()(() => {
    return (
      <Card
        title="Hello World"
        testSection="card"
        type={ select('type', typeOptions, 'warning') } >
        { text('content', 'Hello! This is a short card example.') }
      </Card>
    );
  }));
