import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import {
    AppBar,
    CardActions,
    CardContentInner,
    Confirm,
    DashboardMenuItem,
    DeviceTestWrapper,
    Error,
    HideOnScroll,
    Layout,
    Loading,
    LinearProgress,
    LoadingIndicator,
    Menu,
    MenuItemLink,
    NotFound,
    Notification,
    Responsive,
    Sidebar,
    Title,
    TopToolbar,
    UserMenu,
} from './index';
import theme from '../theme';

export default {
    title: 'layout',
    decorators: [withKnobs],
};

export const app_bar = () => <AppBar />;

// TODO
export const card_actions = () => <CardActions />;
export const card_content_inner = () => <CardContentInner />;

// TODO
export const confirm = () => {
    const title = text('Title', 'title');

    return (
        <Confirm
            content="test"
            onClose={console.log}
            onConfirm={console.log}
            title={title}
        />
    );
};

export const dashboard_menu_item = () => {
    const sidebarIsOpen = boolean('side bar is open', false);
    return <DashboardMenuItem sidebarIsOpen={sidebarIsOpen} />;
};

// TODO
export const device_test_wrapper = () => (
    <DeviceTestWrapper>
        <div>test</div>
    </DeviceTestWrapper>
);

// TODO
export const error = () => {
    return <Error error={{}} errorInfo={{}} />;
};

export const hide_on_scroll = () => {
    return (
        <HideOnScroll>
            <div>test</div>
        </HideOnScroll>
    );
};
export const layout = () => {
    const title = text('Title', 'title');
    return <Layout theme={theme} title={title} />;
};

export const loading = () => {
    return <Loading />;
};
export const linear_progress = () => {
    return <LinearProgress />;
};

export const loading_indicator = () => {
    return <LoadingIndicator />;
};

//TODO
export const menu = () => {
    return <Menu hasDashboard={false} />;
};

//TODO
export const menu_item_link = () => {
    const sidebarIsOpen = boolean('side bar is open', false);
    return <MenuItemLink sidebarIsOpen={sidebarIsOpen} to="/" />;
};

export const not_found = () => {
    return <NotFound />;
};
export const notification = () => {
    return <Notification />;
};

export const responsive = () => {
    return <Responsive />;
};

export const sidebar = () => {
    return (
        <Sidebar>
            <div>sidebar</div>
        </Sidebar>
    );
};

export const title = () => {
    return (
        <Title
            className="title"
            record={{}}
            defaultTitle="default title"
            locale="en"
            title="title"
        />
    );
};

export const top_toolbar = () => {
    return <TopToolbar />;
};

export const user_menu = () => {
    return <UserMenu />;
};
