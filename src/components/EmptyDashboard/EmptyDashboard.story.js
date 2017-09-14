import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Button from '../Button/';
import EmptyDashboard from './index.js';

const stories = storiesOf('Empty Dashboard', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .addWithInfo('Default empty', () => {
    return (
      <div
        className='flex overflow-y--scroll flex--1'
        data-test-section='layers-empty-state'>
        <div className='anchor--middle height--1-1 flex flex--column'>
          <EmptyDashboard
            headline={ text('headline', 'Get started with Optimizely X') }
            description={ text('description', '<div>This is a test description about <Link>X Feature</Link> with a Google.</div>') }
            button={(<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>)}
            imagePath={select('imagePath', {
              'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
              'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
              'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
              'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
              'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
              'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
              'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
              'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
            }, 'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg')}
          />
        </div>
      </div>
    );
  })
