// Core
import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

// Components
import {Topbar} from './Topbar';
import {Sidebar} from './Sidebar';

// Pages
import { Main, Product } from '../../pages';

// Hooks
// import { useInitialize } from '../../bus/profile';
// import { useProductsFetch } from '../../bus/products';
// import { useLocalStorage } from '../../hooks';

// Theme
// import { themes } from '../../assets/theme';

// Styles
import * as S from './styles';
import G from '../../assets/globalStyles';

const App = () => {
    // const { isInitialized } = useInitialize();
    const isInitialized = true;
    // useProductsFetch();
    // const [ themeName, setThemeName ] = useLocalStorage('theme', 'lightTheme');

    // const theme = useMemo(() => themes[ themeName ], [ themeName ]);

    return (
        <ThemeProvider theme = {{}}>
            <G.GlobalReset />
            <G.GlobalFonts />
            {
                isInitialized && (
                    <S.AppContainer>
                        {/* <ToastContainer /> */}
                        <Topbar />
                        <Sidebar />
                        <Switch>
                            <Route
                                component = { Product }
                                path = '/product'
                            />
                            {/* <Route
                                component = { Cart }
                                path = '/cart'
                            /> */}
                            <Route
                                component = { Main }
                                path = '/'
                            />
                        </Switch>
                    </S.AppContainer>
                )}
        </ThemeProvider>
    );
};

export default App;
