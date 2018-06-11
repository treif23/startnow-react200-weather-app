import { combineReducers } from 'redux';
import cityInformationReducer from './components/cityInformation/cityInformationReducer';




const rootReducer = combineReducers({
// // add reducer
cityInformation : cityInformationReducer
});

export default rootReducer;
