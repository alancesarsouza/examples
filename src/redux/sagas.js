import { fork, all } from 'redux-saga/effects';

import applications from './applications/applications.saga';

export default function* rootSaga() {
  yield all([
    applications,
  ].map(fork));
}
