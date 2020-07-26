import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default () => (
    <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/new">Add routine</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
    </Menu>
);

const Menu = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    width: 800px;
    bottom: 0;
    background: grey;
    padding: 0.5rem;
    margin-left: -1rem;
    box-sizing: border-box;
`;

const StyledLink = styled(Link)`
    color: white;
`;
