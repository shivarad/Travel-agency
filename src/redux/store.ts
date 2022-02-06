import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import reducer  from './reducer';

const reducers = combineReducers({
bucket: reducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers, {}, applyMiddleware(thunk));

