import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGamesSaga() {
    try {
        const response = yield axios.get('/game');
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

function* editGameSaga (action) {
    let id = action.payload.id;
    
    
    try{
        console.log('after put', action.payload);
        yield axios.put(`/game/${id}`, action.payload);
        yield put({ type: 'GET_GAMES' });
    }catch(error){
        console.log('error in edit game saga', error);
    }
}

function* gameSaga() {
    yield takeLatest('GET_GAMES', getGamesSaga);
    yield takeLatest('DELETE_GAME', deleteGameSaga);
    yield takeLatest('EDIT_GAME', editGameSaga);
  }

export default gameSaga;