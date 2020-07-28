import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

export default () => {
    return (
        <Container>
            <Title>Add Routine</Title>
            <Input placeholder="Routine name" />
            <Input placeholder="Frequency" />
            <Dropdown options={['Routine', 'Chore']} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
