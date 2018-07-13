import { API_URL } from '../constants/index';

export const setPending = status => ({
	type: 'CHANGE_REQUEST_STATUS',
	payload: status
});

export const getShips = page => get('GET_SHIPS', 'starships', page);

export const getFilms = page => get('GET_FILMS', 'films', page);

const get = (type, url, page) => dispatch => {
	dispatch(setPending(true));
	fetch(`${API_URL}${url}/?page=${page}`)
		.then(response => {
			if (!response.ok) {
				throw Error('Network request failed');
			}
			return response;
		})
		.then(d => d.json())
		.then(d => {
			dispatch({
				type,
				payload: d.results
			});
			dispatch(setPending(false));
		})
		.catch(e => {
			console.log('e: ', e);
			dispatch(setPending(false));
		});
};
