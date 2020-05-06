import React from 'react';
// import GlobalStyles from '../../src/common/styles/GlobalStyles';
import 'antd/dist/antd.css';

const withGlobalStyles = storyFn => (
    <>
        {/* <GlobalStyles /> */}
        {storyFn()}
    </>
);

export default withGlobalStyles;
