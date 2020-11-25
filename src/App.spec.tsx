import React from 'react';
import StoreProvider from './store';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import AppView from './AppView';
import App from './App';
import Welcome from './pages/welcome';
import PageNotFound from './pages/404/index';
import Home from './pages/home';

import { fireEvent, render, screen } from '@testing-library/react';
it('test if show welcome page by default', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <AppView />
    </Router>
  );

  //   expect(screen.getByText(/Welcome to my space/i)).toBeInTheDocument();

  const greeting = getByText("Hey! I'm Andy");
  //   expect(greeting).toBeInTheDocument();
  //   expect(greeting.textContent).toEqual("Hey! I'm Andy");

  //   const button = getByText('ENTER');
  //   fireEvent.click(button);

  //   const hi = getByText('Hi there,');
  //   expect(hi.textContent).toEqual('Hi there,');
});

// it('test if show welcome page by default', () => {
//   const wrapper = mount(
//     <MemoryRouter>
//       <AppView />
//     </MemoryRouter>
//   );

//   expect(wrapper.find(Welcome)).toHaveLength(1);
//   expect(wrapper.find(PageNotFound)).toHaveLength(0);
// });

// it('test page not found', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/404']}>
//       <AppView />
//     </MemoryRouter>
//   );

//   console.log('found: ', wrapper.find(Welcome));
//   expect(wrapper.find(Welcome)).toHaveLength(1);
//   expect(wrapper.find(PageNotFound)).toHaveLength(1);

//   //   console.log(wrapper.find(Home));
//   //   expect(wrapper.find(Welcome)).toHaveLength(1);
//   //   expect(wrapper.find(Home)).toHaveLength(1);
// });
