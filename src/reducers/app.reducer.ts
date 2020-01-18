export interface AppState {
    settings: any;
    links: Array<any>;
}

const initialState: AppState = {
    settings: {
        a: 1,
        b: 2
    },
    links: []
};

const appReducer = (state: AppState = initialState, action: any) => {
    switch (action.type) {
        case 'app_data_loaded':
            const { settings, links } = action.payload;
            console.log('action.payload', action.payload);
            return {
                ...state,
                settings: settings,
                links: links
            };
        default:
            return state;
    }
};

export default appReducer;
