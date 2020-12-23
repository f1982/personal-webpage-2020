import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import ResponsiveMenuBar from './index'

const resizeWindow = (x, y) => {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

const routes = [
  {
    title: 'Home',
    path: '/home',
    exact: true,
    component: null
  },
  {
    title: 'Works',
    path: '/works',
    component: null
  },
  {
    title: 'Hobbies',
    path: '/hobbies',
    component: null
  },
  {
    title: 'About',
    path: '/about',
    component: null
  },
  {
    title: 'Contact',
    path: '/contact',
    component: null
  }
]

test('base setups', () => {
  const { getByTestId, getByText } = render(
    <MemoryRouter>
      <ResponsiveMenuBar
        routes={routes}
        toggleCloseIcon={<span>close</span>}
        toggleOpenIcon={<span>open</span>}
        smallDeviceWidth={768}
      />
    </MemoryRouter>
  )
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('Hobbies')).toBeInTheDocument()
  // Check CSS
  expect(getByTestId('longMenubar')).toHaveStyle('display: flex')
  expect(getByTestId('longMenubar')).toHaveStyle('z-index: 999')
})

// When testing react-router related element
// you need to add <MemoryRouter> for wrapping the test components
// Small screen size
// 小屏幕手机状态
test('show menubar in a small screen ', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ResponsiveMenuBar
        routes={routes}
        toggleCloseIcon={<span>close</span>}
        toggleOpenIcon={<span>open</span>}
        smallDeviceWidth={768}
      />
    </MemoryRouter>
  )

  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: query !== '(min-width: 240px) and (max-width: 767px)',
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    }
  })

  // expect(getByTestId('longMenubar')).toHaveStyle('display: none');
})

// test('display correctly', () => {
//     const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
//     expect(tree).toHaveStyleRule('position', 'relative');
//     expect(tree).toHaveStyleRule('height', '16rem');
//     expect(tree).toHaveStyleRule('height', '11rem', {
//         media: 'screen and (max-width: 768px)'
//     });
// });
