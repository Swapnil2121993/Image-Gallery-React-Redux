import {combineReducers} from 'redux';
import ActiveImage from './reducer_active_image';

const rootReducer = combineReducers({
  activeImage:ActiveImage,

});

export default rootReducer;
