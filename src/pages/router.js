const routes = [
  {
    title: 'Home',
    path: '/home',
    exact: true,
    meta: {
      layout: 'vetical-layout'
    },
    component: require('./home').default
  },
  {
    title: 'Works',
    path: '/works',
    exact: true,
    component: require('./works').default
  },
  {
    title: 'Hobbies',
    path: '/hobbies',
    exact: true,
    component: require('./hobbies').default
  },
  {
    title: 'About',
    path: '/about',
    exact: true,
    component: require('./about').default
  },
  {
    title: 'Contact',
    path: '/contact',
    exact: true,
    component: require('./contact').default
  },
  {
    title: 'Resume',
    path: '/resume',
    exact: true,
    mark: '🔥',
    component: require('./resume').default
  }
]

export default routes
