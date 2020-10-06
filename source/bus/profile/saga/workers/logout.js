// Core
import { put } from 'redux-saga/effects';

// Actions
import { authActions } from '../../actions';
import { togglerCreator } from '../../../togglers';
import { toast } from 'react-toastify';

// Api
import { logout } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callLogoutWorker () {
    yield makeRequestWithSpinner({
        fetcher:     logout,
        togglerType: 'isProfileFetching',
    });

    yield put(togglerCreator('isAuthenticated', false));
    yield put(authActions.logout());
    toast.success('Success Logout!');
}
