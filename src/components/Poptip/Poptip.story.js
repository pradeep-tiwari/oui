import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Poptip from './index.js';
import Button from '../Button';

const stories = storiesOf('Poptip', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <div className="flexboxCenter">
        {story()}
      </div>
    </div>
  ));

stories
  .add('basic poptip', withInfo()(() => (<div className="position--relative height--100">
    <Poptip
      className="text--center"
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!">
      <Button width="default">
        Basic Poptip
      </Button>
    </Poptip>
  </div>)))
  .add('poptip to the right', withInfo()(() => (<div className="position--relative height--100">
    <Poptip
      content="Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"
      bgColor='dark'>
      <Button style="unstyled" width="default">
        <a>Poptip on the right</a>
      </Button>
    </Poptip>
  </div>)))
  .add('poptip with advanced positioning', withInfo()(() => (<div className="position--relative height--100">
    <Poptip
      content={<div>hola a todos mis amigos</div>}>
      <Button width="default">
        Poptip With Advanced Positioning
      </Button>
    </Poptip>
  </div>)));
