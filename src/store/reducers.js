const initialState = {
  ships: [],
  films: [],
  pending: false
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
    case 'GET_SHIPS':
      return { ...state, ships: action.payload };
    case 'GET_FILMS':
      return { ...state, films: action.payload };
    case 'CHANGE_REQUEST_STATUS':
      return { ...state, pending: action.payload };
	}
	return state;
};
