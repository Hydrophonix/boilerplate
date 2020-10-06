// Core
import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vm;
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 150px auto;
    grid-template-areas:
        'topbar topbar'
        'sidebar .';
`;

export const TopbarContainer = styled.div`
    border: 1px solid black;
    grid-area: topbar;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`;

export const SidebarContainer = styled.div`
    border: 1px solid black;
    grid-area: sidebar;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`;
