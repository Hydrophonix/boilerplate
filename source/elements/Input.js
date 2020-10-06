// Core
import React, { memo } from 'react';
import styled from 'styled-components';
import v4 from 'uuid/v4';

// Svg
import { elementsSvg } from '../assets';

// Constants
import { GRAY, GREEN, PINK, WHITE, DEEP_GRAY } from '../constants';

// Styles
const InputContainer = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ isValid }) => isValid ? GREEN : GRAY };
    margin-bottom: 5px;

    header {
        padding-bottom: 5px;
        color: ${({ isValid }) => isValid ? WHITE : DEEP_GRAY };
    }

    input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 3px 10px;
        width: 100%;
    }

    section {
        position: absolute;
        top: 3px;
        right: 3px;

        svg {
            width: 16px;
            height: 16px;
            margin-left: 3px;
            z-index: 5;

            path {
                fill: ${({ isValid }) => isValid ? WHITE : PINK };
            }
        }
    }


    transition: background-color 0.3s;
`;

export const Input = memo(({
    type = 'text',
    name = '',
    placeholder = 'Enter some data...',
    title = 'Some input.',
    hint = null,
    handler = () => void 0,
    deleteHandler = null,
    value = '',
    isValid = false,
    disabled = false,
}) => {
    const tipId = v4();

    return (
        <InputContainer isValid = { isValid }>
            <header>{title}</header>
            <input
                disabled = { disabled }
                name = { name }
                placeholder = { placeholder }
                type = { type }
                value = { value }
                onChange = { handler }
            />
            <section>
                {!isValid && hint && elementsSvg.HintIcon(tipId, hint)}
                {isValid && elementsSvg.SuccessIcon(tipId)}
                {deleteHandler && elementsSvg.DeleteIcon(deleteHandler)}
            </section>
        </InputContainer>
    );
});

