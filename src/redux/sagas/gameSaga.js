import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGamesSaga() {
    console.log('dfghgfd');
    try {
        const response = yield axios.get('/game');
        console.log('CLIENT SIDE WOOP', response.data);
        yield put({ type: 'SET_GAMES', payload: response.data })
    } catch( error ) {
        console.log('----------->', error);
    }
}

function* deleteGameSaga (action) {
    try{
        yield axios.delete(`/game/${action.payload}`);
        yield put({ type: 'GET_GAMES' });
    }catch(error){
        console.log('error deleting game in saga', error);    
    }
}

function* gameSaga() {
    yield takeLatest('GET_GAMES', getGamesSaga);
    yield takeLatest('DELETE_GAME', deleteGameSaga);
  }

export default gameSaga;