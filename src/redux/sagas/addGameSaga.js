import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newGameSaga(action) {
    try {
        yield axios.post('/addgame', action.payload);
        yield put({ type: 'GET_GAMES'})
    } catch( error ) {
        console.log(error);
    }
}

function* addGameSaga() {
    yield takeLatest('ADD_GAME', newGameSaga);
  }

export default addGameSaga;