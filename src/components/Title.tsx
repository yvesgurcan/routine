import React, { ReactNode } from 'react';
import styled from 'styled-components';

export default ({ children }: { children: ReactNode }) => (
    <Title>{children}</Title>
);

const Title = styled.h2`
    text-align: center;
    padding-bottom: 1rem;
`;
