import { combineReducers } from 'redux';
import searchReducer from './components/search/searchReducer';
import cityInfoReducer from './components/cityInformation/cityInfoReducer'



const rootReducer = combineReducers({
// // add reducer
search : searchReducer,
city: cityInfoReducer
});

export default rootReducer;
