import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* newEventSaga(action) {
    try {
        yield axios.post('/addevent', action.payload);
        yield put({ type: 'GET_EVENTS'})
    } catch( error ) {
        console.log(error);
    }
}

function* addEventSaga() {
    yield takeLatest('ADD_EVENT', newEventSaga);
  }

export default addEventSaga;