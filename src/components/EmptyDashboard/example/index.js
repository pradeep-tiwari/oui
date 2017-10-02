/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../../Button/';
import EmptyDashboard from '../index';
import Link from '../../Link/';

export default [
  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/campaign-list-empty-state.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X Extensions'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/extensions-empty-state.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/custom-project-experiments-empty-state.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/empty-rollouts.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/empty-feature-flags.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/audience-list-empty-state.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/attribute-dashboard-empty-state.svg'
      />
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='http://localhost:5000/page-list-empty-state.svg'
      />
    ],
  },

];
