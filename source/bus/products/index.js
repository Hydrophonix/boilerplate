import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchAsync,
    createNewProductAsync,
    deleteProductAsync,
    editProductAsync,
} from './actions';

export const useProductsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsync());
    }, [ dispatch ]);

    const { data, isFetching, error } = useSelector((state) => state.products);

    return {
        data,
        isFetching,
        error,
    };
};

export const useCreateNewProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (body) => dispatch(createNewProductAsync(body));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useDeleteProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (producthash) => dispatch(deleteProductAsync(producthash));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};

export const useEditProduct = () => {
    const dispatch = useDispatch();

    const handlerAsync = (productHash, editedProduct) => dispatch(editProductAsync(productHash, editedProduct));
    const toggler = useSelector(({ togglers }) => togglers.isProductFetching);

    return [
        handlerAsync,
        toggler,
    ];
};
