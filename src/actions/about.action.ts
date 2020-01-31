import { Dispatch } from 'redux';
import ajax from '../utils/ajax';

export const LOAD_ABOUT: string = 'loadAbout';
export type LOAD_ABOUT = typeof LOAD_ABOUT;

export const LOADED_ABOUT: string = 'loadedAbout';
export type LOADED_ABOUT = typeof LOADED_ABOUT;

type AboutActionTypes = LOAD_ABOUT | LOADED_ABOUT;

const API_URL='about.json'

/**
 * About action
 */
export interface AboutAction {
    type: AboutActionTypes;
    payload: any;
}

const loadAbout = async (dispatch: Dispatch) => {
    const responseData = await ajax({
        url: API_URL
    });
    const { data } = responseData;
    console.log('data', data);
    const act: AboutAction = { type: LOADED_ABOUT, payload: data };
    dispatch(act);
};

export { loadAbout };
