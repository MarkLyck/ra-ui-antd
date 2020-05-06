import React from 'react';
import theme from '../theme';
import Login from './Login';
import LoginForm from './LoginForm';
import Logout from './Logout';

export default {
    title: 'auth',
};

export const login = () => (
    <Login theme={theme}>
        <LoginForm />
    </Login>
);

export const login_form = () => <LoginForm />;

export const logout = () => <Logout button />;
