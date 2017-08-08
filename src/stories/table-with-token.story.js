import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Table from '../components/Table';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import Token from '../components/Token';
import Input from '../components/Input';
import Label from '../components/Label';

const stories = storiesOf('Table With Tokens', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
    .add('Mutex original', () => <div data-test-section='oasis-group-dialog'>
        <div className='beta push-quad--bottom'>title</div>
        <fieldset>
          <ol className="lego-form-fields">
            <li className="lego-form-field__item">
              <p>Experiments assigned to this exclusion group are mutually exclusive, which means that visitors to your site will only see one experiment from this exclusion group.</p>
            </li>
          </ol>
        </fieldset>
        <fieldset>
          <ol className='lego-form-fields'>
            <li className='lego-form-field__item'>
              <Label>Exclusion Group Name</Label>
              <Input
                type='text'
                testSection='oasis-group-dialog-name'
                defaultValue="default value"
                onInput={ () => alert('boo') }
              />
            </li>
            <li className='lego-form-field__item'>
              <Label isOptional={ true }>
                Description
              </Label>
              <textarea
                className='lego-textarea'
                data-test-section='oasis-group-dialog-description'
                value="value"
                onChange={ () => alert('boo') }>
              </textarea>
            </li>
          </ol>
        </fieldset>
        <fieldset>
<Table
            density="tight"
            style="rule"
            tableLayoutAlgorithm="auto"
        >
            <Table.THead>
                <Table.TR>
                    <Table.TH>
                        Experiment
                    </Table.TH>
                    <Table.TH isNumerical>
                        Traffic Allocation
                    </Table.TH>
                    <Table.TH>
                        Status
                    </Table.TH>
                </Table.TR>
            </Table.THead>
        <Table.TBody>
            <Table.TR>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <Token
                    isDismissible
                    name={ text('exp a', 'Without rearrange change #1 [BUG] WEB-1845') }
                    onDismiss={() => {console.log("[DEREK] onDismiss");}}
                    style="primary"
                />
                </div>
            </Table.TD>
            <Table.TD isNumerical verticalAlign="middle">
                <div className="soft--ends">
                <input
                    className="width--75 lego-text-input line--1 text--right"
                    min="0"
                    max="100"
                    defaultValue={20}
                    type="number"
                    onChange={() => {console.log("[DEREK] onChange");}}
                    data-test-section="trafficAllocation-test"
                />
                <span className="push-half--left push--right">%</span>
                </div>
            </Table.TD>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <span className="ll">
                    Not Started
                </span>
                </div>
            </Table.TD>
            </Table.TR>
            <Table.TR>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <Token
                    isDismissible
                    name={ text('exp b', 'P13N Sidebar resize') }
                    onDismiss={() => {console.log("[DEREK] onDismiss");}}
                    style="primary"
                />
                </div>
            </Table.TD>
            <Table.TD isNumerical verticalAlign="middle">
                <div className="soft--ends">
                <input
                    className="width--75 lego-text-input line--1 text--right"
                    min="0"
                    max="100"
                    defaultValue={15}
                    type="number"
                    onChange={() => {console.log("[DEREK] onChange");}}
                    data-test-section="trafficAllocation-test"
                />
                <span className="push-half--left push--right">%</span>
                </div>
            </Table.TD>
            <Table.TD verticalAlign="middle">
                <div className="soft--ends">
                <span className="ll">
                    Not Started
                </span>
                </div>
            </Table.TD>
            </Table.TR>
        </Table.TBody>
        </Table>
        </fieldset>
        <div className='lego-form__footer'>
          <ButtonRow
            rightGroup={
              [
                <Button
                  key='btn-cancel'
                  style='plain'
                  testSection='oasis-group-dialog-cancel'
                  onClick={ () => alert('boo') }>
                  Cancel
                </Button>,
                <Button
                  key='btn-save'
                  style='highlight'
                  isDisabled={ true }
                  testSection='oasis-group-dialog-save'
                  onClick={ () => alert('boo') }>
                  button title
                </Button>,
              ]
            }
          />
        </div>
      </div>)