import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getUsersSaga() {
    try {
        console.log('different');
        const response = yield axios.get('/all');
        console.log('hello');
        
        yield put({ type: 'SET_USERS', payload: response.data })
    } catch( error ) {
        console.log(error);
    }
}


function* allUsersSaga() {
    yield takeLatest('GET_USERS', getUsersSaga);
  }

export default allUsersSaga;