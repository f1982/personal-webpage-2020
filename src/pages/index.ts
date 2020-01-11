export default [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: require('./home/').default
    },
    {
        title: 'Works',
        path: '/works',
        component: require('./works/').default
    },
    {
        title: 'Hobbies',
        path: '/hobbies',
        component: require('./hobbies/').default
    },
    {
        title: 'About',
        path: '/about',
        component: require('./about/').default
    }
];
