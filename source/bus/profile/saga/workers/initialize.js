// Core
import { put } from 'redux-saga/effects';

// Actions
import { authActions } from '../../actions';
import { togglerCreator } from '../../../togglers';

export function* callInitializeWorker () {
    yield put(authActions.authenticateAsync());

    yield put(togglerCreator('isInitialized', true));
}
