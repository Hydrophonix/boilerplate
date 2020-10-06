// Core
import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Actions
import { authActions } from '../../actions';
import { togglerCreator } from '../../../togglers';

// Api
import { login } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callLoginWorker ({ payload: { email, password }}) {
    const result = yield makeRequestWithSpinner({
        fetcher:     login(email, password),
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreator('isAuthenticated', true));
        toast.success('Success Login!');
    }
}
