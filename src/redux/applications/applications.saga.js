import { takeLatest, put, select } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

import actions from '../actions';
import constants from '../constants';
import selectors from '../selectors';


import { _createApplication, _fetchApplication } from '../../services/application';

function* createApplication({ payload }) {
  let data = {};

  try {
    data = yield _createApplication({ application: payload.application }).then((res) => res.data);
  }
  catch (error) {
    console.log(error);
  }

  yield put(actions.applications.updateApplication({ application: data }));
}


function* fetchApplication({ payload }) {
  let data = {};

  try {
    data = yield _fetchApplication({ id: payload.id }).then((res) => res.data);
  }
  catch (error) {
    console.log(error);
  }

  yield put(actions.applications.updateApplication({ application: data }));
}

function* isertForeignKeyApplication({ payload }) {
  // const value = put(() => useSelector(selectors.applications.getApplication))
  let data = {};
  const value = select();
  console.log(value)
  try {
    data = yield _fetchApplication({ id: 1 }).then((res) => res.data);
  }
  catch (error) {
    console.log(error);
  }

};


// function* removeForeignKeyApplication({ payload }) {
// }

export default function* applicationSaga() {
  yield takeLatest(constants.applications.CREATE_APPLICATION, createApplication);
  yield takeLatest(constants.applications.FETCH_APPLICATION, fetchApplication);
  yield takeLatest(constants.applications.ADD_FOREIGN_KEY, isertForeignKeyApplication);
}
