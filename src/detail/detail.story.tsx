import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SimpleForm } from '../form';
import {
    // Create,
    CreateView,
    CreateActions,
    // Edit,
    EditView,
    EditActions,
    EditGuesser,
    // Show,
    ShowView,
    ShowActions,
    ShowGuesser,
    SimpleShowLayout,
    TabbedShowLayout,
    Tab,
    TabbedShowLayoutTabs,
} from './index';

export default {
    title: 'detail',
    decorators: [withKnobs],
};

const dummyRecord = {};
const dummyData = [dummyRecord];

export const create_view = () => (
    <CreateView resource="test">
        <SimpleForm>
            <span>test</span>
        </SimpleForm>
    </CreateView>
);

export const create_actions = () => {
    const hasList = boolean('hasList', true);

    return <CreateActions basePath="" hasList={hasList} className="actions" />;
};

export const edit_view = () => (
    <EditView resource="test">
        <SimpleForm>
            <span>test</span>
        </SimpleForm>
    </EditView>
);

export const edit_actions = () => {
    const hasShow = boolean('hasShow', true);

    return (
        <EditActions
            basePath=""
            className="actions"
            hasShow={hasShow}
            data={dummyData}
        />
    );
};

export const edit_guesser = () => <EditGuesser basePath="" resource="" />;
export const show_view = () => <ShowView basePath="" resource="" />;

export const show_actions = () => {
    const hasEdit = boolean('hasEdit', true);

    return (
        <ShowActions
            basePath=""
            hasEdit={hasEdit}
            className="actions"
            data={dummyData}
        />
    );
};

export const show_guesser = () => <ShowGuesser basePath="" resource="" />;
export const simple_show_layout = () => (
    <SimpleShowLayout
        basePath=""
        resource=""
        version="1"
        className="simple-show-layout"
        record={dummyRecord}
    >
        <div>test</div>
    </SimpleShowLayout>
);
export const tabbed_show_layout = () => <TabbedShowLayout />;
export const tab = () => (
    <Tab
        basePath=""
        icon={null}
        label="label"
        className="tab"
        record={dummyRecord}
        value={1}
        contentClassName="tab-content"
        resource="test"
        context={false}
    >
        <div>test</div>
    </Tab>
);
export const tabbed_show_layout_tabs = () => (
    <TabbedShowLayoutTabs basePath="" resource="">
        <div>test</div>
    </TabbedShowLayoutTabs>
);
