// Instruments
import types from './types';

export const uiActions = Object.freeze({
    setProductsFilterState: (type) => ({
        type:    types.SET_PRODUCTS_FILTER_STATE,
        payload: type,
    }),
});
