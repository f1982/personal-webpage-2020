import notify from '../utils/notify'
export const WORKS_LOADING = 'worksLoading';
export const WORKS_LOADED = 'worksLoaded';


// dispatch 会自动传递过来

const fetchWorks = (dispatch: any) => {
    console.log('fetchWorks props:', dispatch);

    const handleErrors = (response: any) => {
        console.log('handleErrors response', response);
        if (!response.ok) {
            throw Error(response.statusText);
            return;
        }
        return response.json();
    };

    return fetch(`http://localhost:3000/static/data/projects.json2`)
        .then(handleErrors)
        .then(json => {
            console.log('json', json.data);
            dispatch({
                type: 'works_fetch_done',
                payload: json.data
            });
        })
        .catch(function(error) {
            console.log(error);
            notify(error);
            // dispatch({
            //     type: 'works_fetch_error',
            //     payload:[],
            //     msg: error
            // });
        });
};

export { fetchWorks };
