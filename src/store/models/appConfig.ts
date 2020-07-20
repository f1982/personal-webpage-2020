import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';
import log from 'loglevel';
import { ProjectObject } from '../../types/interfaces';
import * as uuid from 'uuid';

const API_URL = 'app.json';

let baseUrl =
    process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_STATIC_BASES_URL_TEST
        : process.env.REACT_APP_STATIC_BASES_URL;
baseUrl = baseUrl + 'images/projects/';

const appConfig = createModel({
    state: {
        projects: [],
        links: {}
    },
    reducers: {
        updateConfig: (old, config) => {
            let { projects, links } = config;
            projects.forEach((object: ProjectObject) => {
                object.id = uuid.v4();
                object.cover = object.cover ? baseUrl + object.cover : '';
                object.icon = object.icon ? baseUrl + object.icon : '';
                object.qrcode = object.qrcode !== '' ? baseUrl + object.qrcode : '';
                for (let i = 0; i < object.images.length; i++) {
                    object.images[i] = baseUrl + object.images[i];
                }
            });
            return { ...old, projects: projects, links: links, loadedState: 'loaded' };
        }
    },
    effects: {
        async syncConfig() {
            const cnf = await ajax({
                url: API_URL
            });
            const { data } = cnf;
            log.info('app config data', data);
            this.updateConfig(data);
        }
    }
});

export default appConfig;
