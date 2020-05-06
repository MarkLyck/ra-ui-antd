import React from 'react';
import {
    FormInput,
    FormTab,
    SimpleForm,
    SimpleFormIterator,
    TabbedForm,
    TabbedFormTabs,
    Toolbar,
} from './index';

export default {
    title: 'form',
};

export const form_input = () => (
    <FormInput
        input={{
            props: {
                id: '123',
                addLabel: false,
                source: 'value',
                formClassName: 'form-class',
                fullWidth: false,
            },
        }}
    />
);

export const form_tab = () => (
    <FormTab
        basePath=""
        className="form-tab"
        contentClassName="form-tab-content"
        hidden={false}
        icon={null}
        label="label"
        margin={16}
        resource="test"
        variant="variant"
        value={1}
        record={{}}
        intent="intent"
    >
        <div>tab</div>
    </FormTab>
);

export const simple_form = () => (
    <SimpleForm>
        <div>form</div>
    </SimpleForm>
);

export const simple_form_iterator = () => <SimpleFormIterator />;
export const tabbed_form = () => <TabbedForm />;

export const tabbed_form_tabs = () => (
    <TabbedFormTabs classes={{}} url="" tabsWithErrors="">
        <div>tabbed form tabs</div>
    </TabbedFormTabs>
);

export const toolbar = () => <Toolbar />;
