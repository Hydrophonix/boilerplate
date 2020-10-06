import { useSelector, useDispatch } from 'react-redux';

// Actions
import { uiActions } from './actions';

export const useProductsFilter = () => {
    const dispatch = useDispatch();

    const productsFilterState = useSelector(({ ui }) => ui.type);
    const setProductsFilterState = (type) => dispatch(uiActions.setProductsFilterState(type));

    return {
        productsFilterState,
        setProductsFilterState,
    };
};
