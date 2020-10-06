// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchProfile } from '../profile/saga';
import { watchProducts } from '../products/saga';

export function* rootSaga () {
    yield all([
        watchProfile(),
        watchProducts(),
    ]);
}
