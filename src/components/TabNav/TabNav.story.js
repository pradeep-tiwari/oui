import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TabNav from './index.js';

const stories = storiesOf('TabNav', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Dashboard tabs', withInfo()(() => (
    <div className="root-wrap">
      <div className="wrap">
        <ul className="root-nav root-nav--open" data-test-section="p13n-root-navbar">
          <li className="root-nav__logo push-double--bottom">
            <a href="/v2/projects">
              <div className="root-nav__logo--mark"></div>
              <div className="root-nav__logo--full"></div>
            </a>
          </li>
          <li className="push-double--ends">
            <ul>
              <li data-test-section="personalization-nav-tab">
                <a href="/v2/projects/4576166120" className="root-nav__link root-nav__link--primary is-active">
                  <svg className="root-nav__icon root-nav__icon--large">
                  </svg>
                  <div className="root-nav__link__text">
                    Rootnav Item
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="root-panel">
          <div className="stage">
            <div className="stage__item__content--column position--relative">
              <div className="stage">
                <div className="stage__item">
                  <div className="stage__item__content--column">
                    <div className="stage__item__content--column">
                      <div className="push-quad--sides push-double--top flex--none" data-test-section="campaigns-root">
                        <div className="muted" data-test-section="campaigns-root-project-name">Project Name</div>
                        <div className="beta push--bottom">Experiments</div>

                          <TabNav activeTab="second" style={ ['dashboard'] }>
                            <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
                              Tab #1
                            </TabNav.Tab>
                            <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
                              Tab #2
                            </TabNav.Tab>
                            <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
                              Tab #3
                            </TabNav.Tab>
                          </TabNav>

                        </div>
                        <div className="flex flex--1" data-test-section="layers-table-container">
                          <div className="flex flex--1 flex--column"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )))
  .add('Basic tabs', withInfo()(() => (
    <TabNav activeTab="first">
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  )))
  .add('Closed tabs', withInfo()(() => (
    <TabNav activeTab="second" style={ ['small'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  )))
  .add('Centered tabs', withInfo()(() => (
    <TabNav activeTab="first" style={ ['small', 'center'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  )))
  .add('Plain tabs', withInfo()(() => (
    <TabNav activeTab="first" style={ ['small', 'sub'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  )))
  .add('Header tabs', withInfo()(() => (
    <TabNav activeTab="first" style={ ['header'] }>
      <TabNav.Tab onClick={ action('first tab clicked') } tabId="first">
        Tab #1
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('second tab clicked') } tabId="second">
        Tab #2
      </TabNav.Tab>
      <TabNav.Tab onClick={ action('third tab clicked') } tabId="third">
        Tab #3
      </TabNav.Tab>
    </TabNav>
  )));
