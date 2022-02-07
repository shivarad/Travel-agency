import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import reducer  from './reducer';

// import { persistStore,persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
bucket: reducer
});

// const persistConfig={
//     key:"root",
//     storage,
//     whitelist:['bucket']
// }

// const persistedReducer=persistReducer(persistConfig,rootReducer)
export default rootReducer;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
// export const persistor=persistStore(store);

