import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 35px;
    margin-top: 125px;
`;

const Loader = () => {
    return (
        <Container>
            <span role="img" aria-label="Loading">
                ⏳
            </span>
        </Container>
    );
};

export default Loader;