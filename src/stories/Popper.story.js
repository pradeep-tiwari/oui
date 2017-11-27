import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Manager, Target, Popper, Arrow } from 'react-popper';

const stories = storiesOf('Popper', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

const PopperExample = ({placement}) => (
  <Manager>
    <Target style={{width:'175px', height: '175px', background:'grey', color:'pink'}}>
      Target Box
    </Target>
    <Popper placement={placement} style={{background: 'black',color: 'white',width: '125px',height: '100px',borderRadius: '8px',margin: '5px'}}>
      placement { placement }
      <Arrow className="popper__arrow" />
    </Popper>
  </Manager>
)

stories.add('with BlockList elements', withInfo()(() => {
  return (
    <div style={{background:'#f6f6f6',width: '100vw',height: '100vh',display: 'flex',justifyContent: 'space-around',}}>
      <div style={{ background: 'white', width: 430, height: 430, overflowX: 'scroll'}}>
        <div style={{ width: 600, height: 650, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <PopperExample placement='right'/>
        </div>
      </div>
    </div>
  );
}));
