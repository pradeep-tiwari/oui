import React from 'react';
import Card from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Card', () => {

    it('should render the title passed in', () => {
        const message = 'Hello! This is a short attention bar.';

        const component = shallow(
            <Card title="Hello World">
                { message }
            </Card>
        );

        expect(component.text()).toBe(message);
    });

    it('should render text passed in as children', () => {
        const message = 'Hello! This is a short attention bar.';

        const component = shallow(
            <Card title="Hello World">
                { message }
            </Card>
        );

        expect(component.text()).toBe(message);
    });

    it('should render dismiss button when prop is provided', () => {
        const component = mount(
            <Card
                title="Hello World"
                onClose={ () => { console.log('hello world')} }
                testSection="foo">
                'Hello! This is a short attention bar.'
            </Card>
        );

        expect(component.find('[data-test-section="foo"]').length).toBe(1);
    });

    it('should not render dismiss button by default', () => {
        const component = mount(
            <Card title="Hello World"
                testSection="foo">
                'Hello! This is a short attention bar.'
            </Card>
        );

        expect(component.find('[data-test-section="foo"]').length).toBe(0);
    });

});