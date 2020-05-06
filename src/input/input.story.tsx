import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { SimpleForm } from '../form';
import {
    ArrayInput,
    AutocompleteArrayInput,
    AutocompleteInput,
    BooleanInput,
    CheckboxGroupInput,
    DateInput,
    DateTimeInput,
    FileInput,
    ImageInput,
    InputHelperText,
    Labeled,
    NullableBooleanInput,
    NumberInput,
    PasswordInput,
    RadioButtonGroupInput,
    ReferenceArrayInput,
    ReferenceInput,
    ResettableTextField,
    SearchInput,
    SelectArrayInput,
    SelectInput,
    TextInput,
} from './index';

const withForm = (storyFn: any) => <SimpleForm>{storyFn()}</SimpleForm>;

export default {
    title: 'input',
    decorators: [withForm, withKnobs],
};

export const array_input = () => {
    const label = text('label', 'array input');
    return (
        <ArrayInput
            className="array-input"
            defaultValue={[]}
            record={{}}
            resource="test"
            label={label}
            source="value"
            variant="filled"
            validate={() => true}
        >
            <div>test</div>
        </ArrayInput>
    );
};

export const autocomplete_array_input = () => {
    const label = text('label', 'autocomplete array input');
    return (
        <AutocompleteArrayInput
            className="array-input"
            defaultValue={[]}
            record={{}}
            resource="test"
            label={label}
            source="value"
            variant="filled"
        />
    );
};

export const autocomplete_input = () => {
    const label = text('label', 'autocomplete input');
    return <AutocompleteInput source="value" label={label} />;
};

export const boolean_input = () => {
    const label = text('label', 'boolean input');
    return <BooleanInput source="value" label={label} />;
};

// TODO
export const checkbox_group_input = () => {
    const label = text('label', 'checkbox group input');
    return <CheckboxGroupInput source="value" label={label} choices={[]} />;
};
export const date_input = () => {
    const label = text('label', 'date input');
    return <DateInput source="value" label={label} />;
};

export const date_time_input = () => {
    const label = text('label', 'date input');
    return <DateTimeInput source="value" label={label} />;
};

// TODO
export const file_input = () => {
    const label = text('label', 'file input');
    return <FileInput source="value" label={label} />;
};
// TODO
export const image_input = () => {
    const label = text('label', 'image input');
    return <ImageInput source="value" label={label} />;
};

// TODO
export const input_helper_text = () => {
    const touched = boolean('touched', false);
    return <InputHelperText touched={touched} />;
};

export const labeled = () => {
    const isRequired = boolean('isRequired', false);
    return (
        <Labeled
            id="1"
            isRequired={isRequired}
            resource="test"
            source="value"
            meta={{}}
            input={{}}
        >
            <div>test</div>
        </Labeled>
    );
};

export const nullable_boolean_input = () => {
    const label = text('label', 'nullable boolean input');
    return <NullableBooleanInput source="value" label={label} />;
};

export const number_input = () => {
    const label = text('label', 'number input');
    return <NumberInput source="value" label={label} />;
};

export const password_input = () => {
    const label = text('label', 'password input');
    return <PasswordInput source="value" label={label} />;
};

//TODO
export const radio_button_group_input = () => {
    const label = text('label', 'radio button group input');
    return <RadioButtonGroupInput source="value" label={label} choices={[]} />;
};

//TODO
export const reference_array_input = () => {
    const label = text('label', 'radio button group input');
    return (
        <ReferenceArrayInput
            id="1"
            source="value"
            className="array-input"
            defaultValue={[]}
            record={{}}
            resource="test"
            label={label}
            variant="filled"
            validate={() => true}
            onBlur={() => {}}
            onFocus={() => {}}
            onChange={() => {}}
            parse={(t: any) => t}
            format={(t: any) => t}
        >
            <div>test</div>
        </ReferenceArrayInput>
    );
};

//TODO
export const reference_input = () => {
    const label = text('label', 'radio button group input');
    const allowEmpty = boolean('allow empty', false);
    return (
        <ReferenceInput
            basePath=""
            reference="test"
            classes={{}}
            allowEmpty={allowEmpty}
            id="1"
            source="value"
            className="array-input"
            defaultValue={[]}
            record={{}}
            resource="test"
            label={label}
            variant="filled"
            onBlur={() => {}}
            onFocus={() => {}}
            onChange={() => {}}
            parse={(t: any) => t}
            format={(t: any) => t}
        >
            <div>test</div>
        </ReferenceInput>
    );
};

export const resetable_text_field = () => {
    return <ResettableTextField />;
};

export const search_input = () => {
    const label = text('label', 'search input');
    return <SearchInput source="value" label={label} />;
};

// TODO
export const select_array_input = () => {
    const label = text('label', 'select array input');
    return <SelectArrayInput source="value" label={label} choices={[]} />;
};

// TODO
export const select_input = () => {
    const label = text('label', 'select input');
    return <SelectInput source="value" label={label} choices={[]} />;
};

export const text_input = () => {
    const label = text('label', 'text input');
    return <TextInput source="value" label={label} />;
};
