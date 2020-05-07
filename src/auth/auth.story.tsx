import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import ClearIcon from '@material-ui/icons/Clear';
import theme from '../theme';
import Login from './Login';
import LoginForm from './LoginForm';
import Logout from './Logout';

export default {
    title: 'DONE_auth',
    decorators: [withKnobs],
};

export const login = () => {
    const backgroundImage = text('background image', undefined);
    return (
        <Login theme={theme} backgroundImage={backgroundImage}>
            <LoginForm />
        </Login>
    );
};

export const login_form = () => {
    const redirectTo = text('redirect to', '/');
    return <LoginForm redirectTo={redirectTo} />;
};

export const logout = () => {
    const useCustomIcon = boolean('custom Icon', false);
    const redirectTo = text('redirect to', '/');

    return (
        <Logout
            button
            className="logout"
            icon={useCustomIcon ? <ClearIcon /> : undefined}
            redirectTo={redirectTo}
        />
    );
};
