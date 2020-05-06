import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const withRouter = storyFn => (
    <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);

export default withRouter;
