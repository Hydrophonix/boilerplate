// Core
import React from 'react';
import styled from 'styled-components';

// Styles
const ButtonContainer = styled.button`
    ${({ theme }) => theme.button}
    padding: 0px 10px;
    font-family: PacificoRegular;
    font-size: 20px;
    border-radius: 12px;
`;

export const Button = ({
    children = 'Enter',
    disabled = false,
    toggler = false,
    onClick = () => void 0,
}) => (
    <ButtonContainer
        disabled = { disabled }
        onClick = { () => !disabled && !toggler && onClick() }>
        {
            toggler ? 'Loading' : children
        }
    </ButtonContainer>
);

