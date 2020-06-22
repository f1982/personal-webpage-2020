export default [
    {
        title: 'Home',
        path: '/home',
        exact: true,
        component: require('./home/').default
    },
    {
        title: 'Works',
        path: '/works',
        component: require('./works/').default
    },
    // {
    //     title: 'Hobbies',
    //     path: '/hobbies',
    //     component: require('./hobbies/').default
    // },
    {
        title: 'About',
        path: '/about',
        component: require('./about/').default
    },
    {
        title: 'Contact',
        path: '/contact',
        component: require('./contact/').default
    }
    // {
    //     title: 'Resume',
    //     path: '/resume',
    //     mark: '🔥',
    //     component: require('./resume/').default
    // }
];
