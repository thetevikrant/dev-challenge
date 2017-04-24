export default function reducer(state={
	fetching: false,
	error: null,
	fxPrice: null,
	}, action) {
	switch(action.type) {
		case "IN_PROGRESS":
		return Object.assign({}, state, {
				fetching: action.payload,
            })
		case "GET_FX_PRICE_DATA":
		return Object.assign({}, state, {
				fxPrice: action.payload,
            })
		case "FETCHING_ERROR":
		return Object.assign({}, state, {
				error: action.payload,
            })
	}
	return state;
}