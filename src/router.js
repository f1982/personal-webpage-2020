const routes = [
  {
    title: 'Home',
    path: '/home',
    exact: true,
    meta: {
      layout: 'vetical-layout'
    },
    component: require('./pages/home/').default
  },
  {
    title: 'Works',
    path: '/works',
    exact: true,
    component: require('./pages/works/').default
  },
  {
    title: 'Hobbies',
    path: '/hobbies',
    exact: true,
    component: require('./pages/hobbies/').default
  },
  {
    title: 'About',
    path: '/about',
    exact: true,
    component: require('./pages/about/').default
  },
  {
    title: 'Contact',
    path: '/contact',
    exact: true,
    component: require('./pages/contact/').default
  }
  //     title: 'Resume',
  //     path: '/resume',
  // exact: true,
  //     mark: '🔥',
  //     component: require('./resume/').default
  // }
]

export default routes
