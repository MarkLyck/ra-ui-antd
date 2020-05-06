import React from 'react';
import styled from 'styled-components';
// import GlobalStyles from '../../src/common/styles/GlobalStyles';
import 'antd/dist/antd.css';

const Container = styled.div`
    padding: 24px;
`;

const withGlobalStyles = storyFn => (
    <Container>
        {/* <GlobalStyles /> */}
        {storyFn()}
    </Container>
);

export default withGlobalStyles;
