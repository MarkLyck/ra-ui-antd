import React from 'react';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
    whyDidYouRender(React);
}

const withWhyDidYouRender = storyFn => storyFn();

export default withWhyDidYouRender;
