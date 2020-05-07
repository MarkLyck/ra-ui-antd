import React from 'react';
import styled from 'styled-components';
import ActionDelete from '@material-ui/icons/Delete';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SimpleForm } from '../form';
import {
    // Create,
    CreateView,
    CreateActions,
    // Edit,
    EditView,
    EditActions,
    // EditGuesser,
    // Show,
    ShowView,
    ShowActions,
    // ShowGuesser,
    SimpleShowLayout,
    TabbedShowLayout,
    Tab,
    TabbedShowLayoutTabs,
} from './index';

import { TextInput, BooleanInput, NumberInput, DateInput } from '../input';
import { TextField, BooleanField, NumberField, DateField } from '../field';

export default {
    title: 'DONE_detail',
    decorators: [withKnobs],
};

const mockRecord = {
    id: 1,
    value: 'test',
    text: 'text',
    boolean: true,
    number: 10,
    date: new Date(),
};
const mockData = [mockRecord];

export const create_view = () => {
    const showAside = boolean('show aside', false);

    return (
        <CreateView
            resource="test"
            aside={showAside ? <div>aside</div> : undefined}
        >
            <SimpleForm>
                <TextInput source="text" />
                <BooleanInput source="boolean" />
                <NumberInput source="number" />
                <DateInput source="date" />
            </SimpleForm>
        </CreateView>
    );
};

export const create_actions = () => {
    const hasList = boolean('hasList', true);

    return <CreateActions basePath="" hasList={hasList} className="actions" />;
};

export const edit_view = () => {
    const showAside = boolean('show aside', false);
    const hasShow = boolean('has show', true);

    return (
        <EditView
            resource="test"
            record={{}}
            aside={showAside ? <div>aside</div> : undefined}
            title="test"
            defaultTitle="default"
            hasShow={hasShow}
        >
            <SimpleForm>
                <TextInput source="text" />
                <BooleanInput source="boolean" />
                <NumberInput source="number" />
                <DateInput source="date" />
            </SimpleForm>
        </EditView>
    );
};

export const edit_actions = () => {
    const hasShow = boolean('hasShow', true);

    return (
        <EditActions
            basePath=""
            className="actions"
            hasShow={hasShow}
            data={mockRecord}
        />
    );
};

// export const edit_guesser = () => (
//     <EditGuesser basePath="" resource="test" mockRecord={mockRecord} />
// );

export const show_view = () => {
    const hasEdit = boolean('hasEdit', true);

    return (
        <ShowView
            basePath=""
            resource="test"
            record={mockRecord}
            hasEdit={hasEdit}
        >
            <SimpleShowLayout
                basePath=""
                resource=""
                version="1"
                className="simple-show-layout"
                record={mockData}
            >
                <TextField source="text" resource="test" record={mockRecord} />
                <BooleanField
                    source="boolean"
                    resource="test"
                    record={mockRecord}
                />
                <NumberField
                    source="number"
                    resource="test"
                    record={mockRecord}
                />
                <DateField source="date" resource="test" record={mockRecord} />
            </SimpleShowLayout>
        </ShowView>
    );
};

export const show_actions = () => {
    const hasEdit = boolean('hasEdit', true);

    return (
        <ShowActions
            basePath=""
            hasEdit={hasEdit}
            className="actions"
            data={mockRecord}
        />
    );
};

// export const show_guesser = () => (
//     <ShowGuesser basePath="" resource="" record={mockRecord} />
// );

export const simple_show_layout = () => (
    <SimpleShowLayout
        basePath="/"
        resource="test"
        version="1"
        className="simple-show-layout"
        record={mockRecord}
    >
        <TextField source="text" resource="test" record={mockRecord} />
        <BooleanField source="boolean" resource="test" record={mockRecord} />
        <NumberField source="number" resource="test" record={mockRecord} />
        <DateField source="date" resource="test" record={mockRecord} />
    </SimpleShowLayout>
);

export const tabbed_show_layout = () => (
    <TabbedShowLayout>
        <Tab
            basePath=""
            icon={<ActionDelete />}
            label="tab 1"
            className="tab"
            record={mockRecord}
            value="header"
            contentClassName="tab-content"
            resource="test"
            context={false}
        >
            <SimpleShowLayout
                basePath="/"
                resource="test"
                version="1"
                className="simple-show-layout"
                record={mockRecord}
            >
                <TextField source="text" resource="test" record={mockRecord} />
                <BooleanField
                    source="boolean"
                    resource="test"
                    record={mockRecord}
                />
                <NumberField
                    source="number"
                    resource="test"
                    record={mockRecord}
                />
                <DateField source="date" resource="test" record={mockRecord} />
            </SimpleShowLayout>
        </Tab>
        <Tab
            basePath=""
            icon={null}
            label="tab 2"
            className="tab"
            record={mockRecord}
            value="header"
            contentClassName="tab-content"
            resource="test"
            context={false}
        >
            <TextField source="text" resource="test" record={mockRecord} />
            <NumberField source="number" resource="test" record={mockRecord} />
        </Tab>
    </TabbedShowLayout>
);

// export const tab = () => (
//     <Tab
//         basePath=""
//         icon={<ActionDelete />}
//         label="label"
//         className="tab"
//         record={mockRecord}
//         value="header"
//         contentClassName="tab-content"
//         resource="test"
//         context={false}
//     >
//         <div>children</div>
//     </Tab>
// );

export const tabbed_show_layout_tabs = () => (
    <TabbedShowLayoutTabs basePath="" resource="">
        <Tab
            basePath=""
            icon={<ActionDelete />}
            label="tab 1"
            className="tab"
            record={mockRecord}
            value="header"
            contentClassName="tab-content"
            resource="test"
            context={false}
        >
            <div />
        </Tab>
        <Tab
            basePath=""
            icon={null}
            label="tab 2"
            className="tab"
            record={mockRecord}
            value="header"
            contentClassName="tab-content"
            resource="test"
            context={false}
        >
            <div />
        </Tab>
    </TabbedShowLayoutTabs>
);
