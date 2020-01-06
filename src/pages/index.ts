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
  }
]
