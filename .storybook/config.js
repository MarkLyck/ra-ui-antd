import { configure, addDecorator } from '@storybook/react';
// import { withA11y } from '@storybook/addon-a11y';
import withGlobalStyles from './decorators/withGlobalStyles';
import withRouter from './decorators/withRouter';
import withTheme from './decorators/withTheme';
import withRedux from './decorators/withRedux';
// import withWhyDidYouRender from './decorators/withWhyDidYouRender';
// import '~/common/fontAwesomeLibrary';

addDecorator(withRouter);
addDecorator(withRedux);
addDecorator(withTheme);
// addDecorator(withWhyDidYouRender);
addDecorator(withGlobalStyles);
// addDecorator(withA11y);

configure(require.context('../src/', true, /\.story\.ts(x)$/), module);
