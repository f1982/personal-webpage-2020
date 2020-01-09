export default [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: require('./home/').default
  },
  {
    title: 'About',
    path: '/about',
    component: require('./about/').default
  },
  {
    title: 'Works',
    path: '/works',
    component: require('./works/').default
  }
]
