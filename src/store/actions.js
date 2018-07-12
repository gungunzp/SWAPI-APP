import { API_URL } from '../constants/index';

const pending = status => ({
  type: 'CHANGE_REQUEST_STATUS',
  payload: status
});

export const getShips = page => {
  return dispatch => {
    dispatch(pending(true));
    fetch(`${API_URL}starships/?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw Error('Network request failed');
        }
        return response;
      })
      .then(d => d.json())
      .then(d => {
        dispatch({
          type: 'GET_SHIPS',
          payload: d.results
        });
      })
      .then(() => dispatch(pending(false)))
      .catch(e => {
        console.log('e: ', e);
        dispatch(pending(false));
      });
  };
};