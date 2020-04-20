import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';
import { ProjectObject, LinkObject } from '../../types/interfaces';
import log from 'loglevel';

const HOME_API_URL = 'home.json';
const LINKS_API_URL = 'links.json';

/**
 * 定义 works 这个页面需要的变量
 */
interface HomeState {
    whatIDo: string;
    whatILike: string;
    projects: Array<ProjectObject>;
    sns: Array<LinkObject>;
}

const home = createModel({
    state: {
        whatIDo: '',
        whatILike: '',
        projects: [],
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
        async syncLinks() {
            const responseData = await ajax({
                url: LINKS_API_URL,
                params: {}
            });
            const { data } = responseData;
            this.updateLinks(data);
        },
        async syncHome() {
            const response = await ajax({
                url: HOME_API_URL
            });
            const { data } = response;
            log.info('response', response);
            this.updateLinks(data);
        }
    }
});

export default home;
