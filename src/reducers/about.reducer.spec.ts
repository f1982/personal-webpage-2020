import aboutReducer, { initialState } from './about.reducer';
import { LOADED_ABOUT, AboutAction } from '../actions/about.action';

describe('about reducer', () => {
    describe('functions', () => {
        it('default values return values', () => {
            const act: AboutAction = { type: '', payload: null };
            const state = aboutReducer(initialState, act);
            console.log('state', state);
            expect(state).toEqual(initialState);
        });
    });
});
