import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import  { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import OverlayWrapper from '../OverlayWrapper';
import Popover from '../Popover';
import Button from '../Button';

const alignOpts = {
    'center': 'center',
    'left': 'left',
    'right': 'right'};

const verticalAlignOpts = {
    'middle': 'middle',
    'top': 'top',
    'bottom': 'bottom'};

const stories = storiesOf('OverlayWrapper', module);
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
  .addWithInfo('default popover', () => {
    return (
        <OverlayWrapper
            behavior="click"
            horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
            overlay={<Popover title="Lorem ipsum dolor sit amet"><p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p></Popover>}
            shouldHideOnClick={ boolean('shouldHideOnClick', true) }
            verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') }
        >
            <Button width="default">
            Open Popover
            </Button>
        </OverlayWrapper>
    );
  })
  .addWithInfo('pinned popover', () => {
      return (
        <OverlayWrapper
          behavior="click"
          horizontalAttachment="left"
          horizontalTargetAttachment="right"
          isConstrainedToScreen
          overlay={<Popover title="Lorem ipsum dolor sit amet">
                <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
                <Button>Close Popopver</Button>
            </Popover>}
          shouldHideOnClick
          verticalAttachment="middle"
          verticalTargetAttachment="middle"
        >
          <Button width="default">
            Open Pinned Popover
          </Button>
        </OverlayWrapper>
      )
  });
