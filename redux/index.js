import { combineReducers } from 'redux';

// Import all reducers
import { reducer as CartRedux } from './CartRedux';

// Combine the imported reducers
const AppReducers = combineReducers({
	cart: CartRedux,
});


// Export the combined reducers
export default AppReducers;