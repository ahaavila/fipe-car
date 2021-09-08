import { all, takeEvery, actionChannel } from 'redux-saga/effects';
import { getBranchesSaga } from './saga';
import { GET_BRANCHES } from '../states/state';

export default function* rootSaga() {
  yield all([
    takeEvery((yield actionChannel(GET_BRANCHES)), getBranchesSaga)
  ])
}