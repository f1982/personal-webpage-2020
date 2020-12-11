import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';
// import log from 'loglevel';
import { ProjectObject } from '../../types/interfaces';
// import * as uuid from 'uuid';

const API_URL = 'app.json';

let baseUrl = process.env.REACT_APP_STATIC_BASES_URL;
baseUrl = baseUrl + 'images/projects/';

const appConfig = createModel({
    state: {
        projects: [],
        links: {},
        pages: {},
        settings: {},
        loadingState: ""
    },
    reducers: {
        startToLoad: (state, payload) => {
            return { ...state, loadingState: 'pending' }
        },
        updateConfig: (old: any, config: any) => {
            let { settings, projects, links, pages } = config;
            projects.forEach((object: ProjectObject) => {
                // object.id = uuid.v4();
                object.cover = object.cover ? baseUrl + object.cover : '';
                object.icon = object.icon ? baseUrl + object.icon : '';
                object.qrcode = object.qrcode !== '' ? baseUrl + object.qrcode : '';
                for (let i = 0; i < object.images.length; i++) {
                    object.images[i] = baseUrl + object.images[i];
                }
            });
            return {
                ...old,
                projects: projects,
                settings: settings,
                links: links,
                pages,
                loadingState: 'loaded'
            };
        }
    },
    effects: {
        async syncConfig() {
            this.startToLoad();
            const cnf = await ajax({ url: API_URL });
            const { data } = cnf;
            this.updateConfig(data);
        }
    }
});

export default appConfig;
