import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';

const HOME_API_URL = 'home.json';

const home = createModel({
    state: {
        whatIDo: '',
        whatILike: '',
        // projects: [],
        sns: []
    },
    reducers: {
        updateLinks: (old: any, links: any) => {
            return links;
        },
        updateHome: (old: any, home: any) => {
            // const { whatILike, whatIDo, projects, sns } = home;
            // return { ...old, whatIDo: whatIDo, whatILike: whatILike, highlightProjects: projects, sns: sns };
            return home;
        }
    },

    effects: {
        async syncHome() {
            const response = await ajax({
                url: HOME_API_URL
            });
            const { data } = response;
            // log.info('response', response);
            this.updateLinks(data);
        }
    }
});

export default home;
