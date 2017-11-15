import {createStore} from 'redux';
import rootReducer from './reducer/index';

export default function store(initialState){
    return createStore(
      rootReducer,
      initialState,
    );
}
