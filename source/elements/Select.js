// Core
import React, { memo } from 'react';
import styled from 'styled-components';
import v4 from 'uuid/v4';

// Svg
import { elementsSvg } from '../assets';

// Constants
import { GRAY, GREEN, PINK, WHITE, DEEP_GRAY } from '../constants';

// Styles
const SelectContainer = styled.div`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ isValid }) => isValid ? GREEN : GRAY};
    margin-bottom: 5px;

    header {
        padding-bottom: 5px;
        color: ${({ isValid }) => isValid ? WHITE : DEEP_GRAY};
    }

    select {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        padding: 3px 10px;
        width: 100%;
    }

    svg {
        position: absolute;
        width: 16px;
        height: 16px;
        cursor: help;
        top: 3px;
        right: 3px;

        path {
            fill: ${({ isValid }) => isValid ? WHITE : PINK};
        }
    }

    transition: background-color 0.3s;
`;

export const Select = memo(({
    name = '',
    title = 'Some input.',
    hint = null,
    handler = () => void 0,
    value = '',
    isValid = false,
    disabled = false,
    typesArray = [],
}) => {
    const tipId = v4();

    return (
        <SelectContainer isValid = { isValid }>
            <header>{title}</header>
            <select
                disabled = { disabled }
                name = { name }
                value = { value }
                onChange = { handler }>
                <option value = { '' }>none</option>
                {
                    typesArray.map((type, index) => (
                        <option
                            key = { index }
                            value = { type }>
                            {type}
                        </option>
                    ))
                }
            </select>
            {!isValid && hint && elementsSvg.HintIcon(tipId, hint)}
            {isValid && elementsSvg.SuccessIcon(tipId)}
        </SelectContainer>
    );
});

