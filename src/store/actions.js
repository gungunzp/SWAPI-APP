import { get } from '../store/apiRequest';

export const changeFirstName = newFirstName => ({
	type: 'ACTION_CHANGE_FIRST_NAME',
	payload: newFirstName
});

export const changeSecondName = newSecondName => ({
	type: 'ACTION_CHANGE_SECOND_NAME',
	payload: newSecondName
});

const pending = status => ({
  type: 'CHANGE_REQUEST_STATUS',
  payload: status
});

export const getShips = page => {
	return dispatch => {
		dispatch(pending(true));
		get(`starships/?page=${page}`)
			.then(items => {
				// if (!items) throw Error('Bad request');
				dispatch({
					type: 'GET_SHIPS',
					payload: items.results
				});
			})
			.then(() => dispatch(pending(false)))
			.catch(e => {
				console.log('e: ', e);
        dispatch(pending(false));
			});
	};
};
