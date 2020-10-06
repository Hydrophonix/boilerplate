// Actions
import { fill } from '../../actions';

// Api
import { productsFetcher } from '../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* fetchProducts() {
    yield makeRequestWithSpinner({
        fetcher:     productsFetcher,
        togglerType: 'isProductsFetching',
        fill,
    });
}
