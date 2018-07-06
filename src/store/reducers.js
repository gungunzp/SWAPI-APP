const initialState = {
	firstName: 'Alex',
	secondName: 'G',
  ships: [],
  pending: '3'
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ACTION_CHANGE_FIRST_NAME':
			return { ...state, firstName: action.payload };
    case 'ACTION_CHANGE_SECOND_NAME':
      return { ...state, secondName: action.payload };
    case 'GET_SHIPS':
      return { ...state, ships: action.payload };
    case 'CHANGE_REQUEST_STATUS':
      return { ...state, pending: action.payload };
	}
	return state;
};
