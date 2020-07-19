import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import MediaBanner from './MediaBanner';

test('only with a title ', () => {
    const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('with video URL ', () => {
    const tree = renderer.create(<MediaBanner title='hello' videoURL='http://www.baidu.com' />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('display correctly', () => {
    const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
    expect(tree).toHaveStyleRule('position', 'relative');
    expect(tree).toHaveStyleRule('height', '16rem');
    expect(tree).toHaveStyleRule('height', '11rem', {
        media: 'screen and (max-width: 768px)'
    });
});
