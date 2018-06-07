import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './index.js';
import DropdownContents from './DropdownContents';
import DropdownListItem from './DropdownListItem';
import DropdownBlockLink from './DropdownBlockLink';
import DropdownBlockLinkText from './DropdownBlockLinkText';
import DropdownBlockLinkSecondaryText from './DropdownBlockLinkSecondaryText';
import Button from '../Button';
import BlockList from '../BlockList';
import Icon from 'react-oui-icons';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

const stories = storiesOf('Dropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        buttonContent='Default Dropdown'
        width={ number('width', 300) }
        arrowIcon={ true }>
        <BlockList>
          {
            data.map((item, index) => {
              return (
                <BlockList.Category header={ item.header } key={ index }>
                  <BlockList.Item onClick={ action('click on complex item') }>
                    <div className="flex flex-align--center">
                      <div className="flex--1">
                        <div>{ item.title }</div>
                        <div className="muted micro">{ item.description }</div>
                      </div>
                    </div>
                  </BlockList.Item>
                </BlockList.Category>
              );
            })
          }
        </BlockList>
      </Dropdown>
    </Container>
  );
}));

stories.add('Error', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        buttonContent='Error State'
        width={ number('width', 300) }
        displayError={ true }
        arrowIcon={ true }>
        <BlockList>
          {
            data.map((item, index) => {
              return (
                <BlockList.Category header={ item.header } key={ index }>
                  <BlockList.Item onClick={ action('click on complex item') }>
                    <div className="flex flex-align--center">
                      <div className="flex--1">
                        <div>{ item.title }</div>
                        <div className="muted micro">{ item.description }</div>
                      </div>
                    </div>
                  </BlockList.Item>
                </BlockList.Category>
              );
            })
          }
        </BlockList>
      </Dropdown>
    </Container>
  );
}));

stories.add('Icon', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        isDisabled={ boolean('isDisabled', false) }
        fullWidth={ boolean('fullWidth', false) }
        buttonContent={ <div>Hamburgers <span className="push-half--left"><Icon name='hamburger' /></span></div> }
        width={ number('width', 350) }>
        <BlockList>
          {
            data.map((item, index) => {
              return (
                <BlockList.Category header={ item.header } key={ index }>
                  <BlockList.Item onClick={ action('click on complex item') }>
                    <div className="flex flex-align--center">
                      <div className="flex--1">
                        <div>{ item.title }</div>
                        <div className="muted micro">{ item.description }</div>
                      </div>
                    </div>
                  </BlockList.Item>
                </BlockList.Category>
              );
            })
          }
        </BlockList>
      </Dropdown>
    </Container>
  );
}));

stories.add('Z-index', withInfo()(() => {
  return (
    <Container className="background--faint">
      <SubContainer>
        <ScrollContainer>
          <Dropdown
            isDisabled={ boolean('isDisabled', false) }
            buttonContent='Dropdown'
            width={ number('width', 300) }>
            <BlockList>
              {
                data.map((item, index) => {
                  return (
                    <BlockList.Category header={ item.header } key={ index }>
                      <BlockList.Item onClick={ action('click on complex item') }>
                        <div className="flex flex-align--center">
                          <div className="flex--1">
                            <div>{ item.title }</div>
                            <div className="muted micro">{ item.description }</div>
                          </div>
                        </div>
                      </BlockList.Item>
                    </BlockList.Category>
                  );
                })
              }
            </BlockList>
          </Dropdown>
          <h1>This text should be behind the open dropdown</h1>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}));

stories.add('List', withInfo()(() => {
  return (
    <Container className="background--faint">
      <SubContainer>
        <Dropdown
          isDisabled={ boolean('isDisabled', false) }
          activator={
            <Button>Click to activate</Button>
          }
          placement={ 'top-start' }
          width={ number('width', 300) }>
          <DropdownContents
            minWidth={ 300 }
            direction={ 'up' }>
            <DropdownListItem>
              <DropdownBlockLink onClick={ action('click dropdown block link') }>
                <DropdownBlockLinkText text={ 'This is a label' } />
                <DropdownBlockLinkSecondaryText secondaryText={ 'This is a smaller description' } />
              </DropdownBlockLink>
            </DropdownListItem>
            <DropdownListItem>
              <DropdownBlockLink onClick={ action('click dropdown block link 2') }>
                <DropdownBlockLinkText text={ 'This is a second label' } />
                <DropdownBlockLinkSecondaryText secondaryText={ 'This is a second smaller description' } />
              </DropdownBlockLink>
            </DropdownListItem>
          </DropdownContents>
        </Dropdown>
        <h1>This text should be behind the open dropdown</h1>
      </SubContainer>
    </Container>
  );
}));

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

const SubContainer = styled.div`
  width: 700px;
  height: 400px;
  background: lightgrey;
  margin: 100px auto;
  overflow: scroll;
  padding: 20px;
  padding-top: 300px;
`;

const ScrollContainer = styled.div`
  width: 1000px;
  height: 1000px;
`;
