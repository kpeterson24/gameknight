import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getScheduleSaga() {
    try {
        const response = yield axios.get('/schedule');
        yield put({ type: 'SET_SCHEDULE', payload: response.data })
    } catch( error ) {
        console.log(error);
    }
}

// function* deleteGameSaga (action) {
//     try{
//         yield axios.delete(`/game/${action.payload}`);
//         yield put({ type: 'GET_GAMES' });
//     }catch(error){
//         console.log('error deleting game in saga', error);    
//     }
// }

function* scheduleSaga() {
    yield takeLatest('GET_SCHEDULE', getScheduleSaga);
    // yield takeLatest('DELETE_GAME', deleteGameSaga);
  }

export default scheduleSaga;