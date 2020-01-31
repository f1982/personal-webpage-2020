/**
 * How to write expect
 * https://jestjs.io/docs/en/expect
 * 
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { SkillItem, TitleSpan } from './SkillItem';

function setup(title = '', level = 0) {
    const actions = {};

    const component = shallow(<SkillItem title={title} level={level} />);

    return {
        component: component,
        actions: actions,
        // Have to import TitleSpan first
        titleSpan: component.find(TitleSpan)
    };
}

describe('test item', () => {
    it('should display', () => {
        const { titleSpan } = setup('hello');
        console.log('titleSpan text', titleSpan.text());
        expect(titleSpan.text()).toEqual('hello');
    });
});
