import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/theme';

const withTheme = storyFn => (
    <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </MuiThemeProvider>
);

export default withTheme;
