const types = {
	SET_VISITED_TIMES: 'SET_VISITED_TIMES',
};

export const actions = {
	setVisitedTimes: (dispatch) => {
		dispatch({ type: types.SET_VISITED_TIMES })
	},
};

const initialState = {
	visited_times: 0,
}

export const reducer = (state = initialState, action) => {
	const { 
		visited_times,
	} = action;

	switch (action.type) {
		case types.SET_VISITED_TIMES:
			return { ...state, visited_times };
		default:
			return state
	}
}