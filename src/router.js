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
        component: require('./pages/works/').default
    },
    {
        title: 'Hobbies',
        path: '/hobbies',
        component: require('./pages/hobbies/').default
    },
    {
        title: 'About',
        path: '/about',
        component: require('./pages/about/').default
    },
    {
        title: 'Contact',
        path: '/contact',
        component: require('./pages/contact/').default
    }
    //     title: 'Resume',
    //     path: '/resume',
    //     mark: '🔥',
    //     component: require('./resume/').default
    // }
];

export default routes;
