import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGamesSaga() {
    try {
        const response = yield axios.get('/game');
        yield put({ type: 'SET_GAMES', payload: response.data })
    } catch( error ) {
        console.log(error);
    }
}

function* gameSaga() {
    yield takeLatest('GET_GAMES', getGamesSaga);
  }

export default gameSaga;