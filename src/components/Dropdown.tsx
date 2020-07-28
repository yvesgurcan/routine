import React from 'react';
import styled from 'styled-components';

interface Props {
    options?: string[];
}

export default ({ options = [], ...props }: Props) => (
    <Dropdown {...props}>
        {options.map(option => (
            <option key={option}>{option}</option>
        ))}
    </Dropdown>
);

const Dropdown = styled.select`
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    padding: 0.5rem;
    padding-left: 0;
    margin: 0.5rem;
    color: white;
`;
