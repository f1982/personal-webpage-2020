import { Dispatch } from 'redux';
import ajax from './../utils/ajax';

const APP_API_URL = 'app.json';

interface AppActionType {
    type: string;
    payload: any;
}

const loadAppData = async (dispatch: Dispatch) => {
    const responseData: any = await ajax({
        url: APP_API_URL
    });
    console.log('app action responseData', responseData.data);

    // const { data } = responseData;
    const { settings, links } = responseData.data;
    console.log('links', links);
    console.log('settings', settings);

    const act: AppActionType = {
        type: 'app_data_loaded',
        payload: {
            settings: settings,
            links: links
        }
    };
    dispatch(act);
};

export default loadAppData;
