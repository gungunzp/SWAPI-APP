import { API_URL } from '../constants/index';
// import { requestStatus } from './actions';
// import { store } from '../index';

// export async function put(url, payload) {
//   return makeRequest(url, payload, 'PUT');
// }
//
// export async function post(url, payload) {
// 	return makeRequest(url, payload, 'POST');
// }

export async function get(url) {
  let response;
  try {
    // store.dispatch(requestStatus(true));
    response = await fetch(`${API_URL}${url}`);
    // store.dispatch(requestStatus(false));
    return await response.json();
  } catch (e) {
    // error will still be displayed in console
  }
}

// async function makeRequest(url, payload, method) {
// 	try {
// 		const response = await fetch(`${API_URL}${url}`, {
// 			method,
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify(payload)
// 		});
// 		return await response.json();
// 	} catch (error) {
// 		// error will still be displayed in console
// 	}
// }