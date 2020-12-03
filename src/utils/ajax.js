import axios from 'axios';
import Nprogress from 'nprogress';
import notify from './notify';
// import reloadApp from './reloadApp'
import 'nprogress/nprogress.css';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

/**
 * @param  {object} req - https://github.com/axios/axios#request-config
 * @return {Promise<any>}
 */
export default function ajax(req) {
    req.baseURL = baseUrl;

    // https://developers.themoviedb.org/3/getting-started/authentication
    req.params = {
        [process.env.REACT_APP_API_KEY_FIELD]: process.env.REACT_APP_API_KEY_VALUE,
        ...req.params
    };
    // const { sessionId } = store.getState().auth;
    // if (sessionId) req.params.session_id = sessionId;

    Nprogress.start();
    return (
        axios(req)
            /**
             * {object} res -
             * https://github.com/axios/axios#response-schema
             * */
            .then(res => {
                // console.log('res', res);
                Nprogress.done();
                return res.data;
            })
            /**
             * {object} err -
             * https://github.com/axios/axios#handling-errors
             * */
            .catch(err => {
                // console.log('error');
                // console.log('err', err);
                if (err.response) {
                    const res = err.response;
                    const resData = res.data;
                    console.log('resData', resData);
                    notify(
                        typeof resData === 'string' ? resData : `[${resData.status_code}] ${resData.status_message}`
                    );
                    if (res.status === 401) {
                        // reloadApp() // session denied, etc
                    }
                } else {
                    notify(err.message);
                }
                Nprogress.done(true);
                throw err;
            })
    );
}
