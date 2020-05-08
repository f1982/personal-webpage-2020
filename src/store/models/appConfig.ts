import { createModel } from '@rematch/core';
import ajax from '../../utils/ajax';
import log from 'loglevel';

const API_URL = 'app.json';

const appConfig = createModel({
    state: {
        a: 1,
        b: 2
    },
    reducers: {
        updateConfig: (old, config) => {
            return config;
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
