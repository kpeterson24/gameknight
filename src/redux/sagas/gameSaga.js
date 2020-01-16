import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGames() {
    try {

    }
}



function* gameSaga() {
    let id = action.payload.id;
    
    yield takeLatest('SET_GAMES', fetchUser);
  }

export default gameSaga;