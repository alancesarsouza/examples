import { persistCombineReducers/* , persistReducer */ } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import constants from '../config/constants';
// import applicationConstants from './applications/applications.constants';
import applicationReducer from './applications/applications.reducer';

const config = {
  storage,
  key: constants.NAME_APPLICATION,
  // stateReconciler: autoMergeLevel2,
  whitelist: [constants.NAME_APPLICATION],
};

const appReducer = persistCombineReducers(config, {
  // [authConstants.REDUX_NAMESPACE]: authReducer,
  [constants.NAME_APPLICATION]: applicationReducer,
  // [cachesConstants.REDUX_NAMESPACE]: cachesReducer,
  // eslint-disable-next-line max-len
  // [persistentCachesConstants.REDUX_NAMESPACE]: persistReducer(cacheStoreConfig, persistentCachesReducer),
  // [userConstants.REDUX_NAMESPACE]: persistReducer(userStoreConfig, userReducer),
});

export default function rootReducer(state, action) {
  // if (action.type === authConstants.LOGOUT_REQUEST) {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
}
