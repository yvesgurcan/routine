import React from 'react';
import styled from 'styled-components';

interface Props {
    placeholder?: string;
}

export default (props: Props) => <Input {...props} />;

const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    padding: 0.5rem;
    padding-left: 0;
    margin: 0.5rem;
    color: white;
`;
