// Core
import { combineReducers } from 'redux';

// Instruments
import { uiReducer as ui } from '../ui/reducer';
import { authReducer as profile } from '../profile/reducer';
import { productsReducer as products } from '../products/reducer';

export default combineReducers({
    ui,
    profile,
    products,
});
