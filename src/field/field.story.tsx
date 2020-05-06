import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    date,
    object,
} from '@storybook/addon-knobs';
// import theme from '../theme';
import {
    ArrayField,
    BooleanField,
    ChipField,
    DateField,
    EmailField,
    FileField,
    ImageField,
    FunctionField,
    NumberField,
    ReferenceField,
    ReferenceArrayField,
    ReferenceManyField,
    RichTextField,
    SelectField,
    TextField,
    UrlField,
} from './index';

export default {
    title: 'field',
    decorators: [withKnobs],
};

export const array_field = () => (
    <ArrayField>
        <div />
    </ArrayField>
);

export const boolean_field = () => {
    const booleanValue = boolean('boolean', true);
    const record = {
        value: booleanValue,
    };
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');

    return (
        <BooleanField record={record} source={source} emptyText={emptyText} />
    );
};

export const chip_field = () => {
    const chipText = text('Text', 'chip field');
    const record = { value: chipText };

    return <ChipField record={record} source="value" />;
};

export const date_field = () => {
    const recordDate = date('date', new Date());
    const record = { value: recordDate };

    return <DateField record={record} source="value" />;
};

export const email_field = () => {
    const emailText = text('Email', 'test@email.com');
    const record = { value: emailText };

    return <EmailField record={record} source="value" />;
};

export const file_field = () => {
    // TODO
    const record = { id: 'test' };

    return <FileField record={record} source="value" />;
};

export const image_field = () => {
    // TODO
    const record = { id: 'test' };

    return <ImageField record={record} source="value" />;
};

export const function_field = () => {
    const renderValue = text('render Value', 'Function Field');
    const record = { id: 'test' };

    return (
        <FunctionField
            record={record}
            source="value"
            render={() => renderValue}
        />
    );
};
export const number_field = () => {
    const numberValue = number('number', 100000);
    const record = { value: numberValue };

    return <NumberField record={record} source="value" />;
};

// TODO
export const reference_field = () => {
    const reference = text('reference', '123');
    const record = { id: 'test' };

    return (
        <ReferenceField record={record} source="value" reference={reference}>
            <div>test</div>
        </ReferenceField>
    );
};

// TODO
export const reference_array_field = () => {
    const reference = text('reference', '123');
    const record = { id: 'test' };

    return (
        <ReferenceArrayField
            record={record}
            source="value"
            reference={reference}
        >
            <div>test</div>
        </ReferenceArrayField>
    );
};

// TODO
export const reference_manys_field = () => {
    const reference = text('reference', '123');
    const target = text('target', '123');
    const record = { id: 'test' };

    return (
        <ReferenceManyField
            record={record}
            source="value"
            reference={reference}
            target={target}
        >
            <div>test</div>
        </ReferenceManyField>
    );
};

export const rich_text_field = () => {
    const textValue = text('text', 'Rich text field');
    const record = { value: textValue };

    return <RichTextField source="value" record={record} />;
};

export const select_field = () => {
    const emptyText = text('empty text', 'empty');
    const choices = object('choices', [
        { value: '1', text: 'one' },
        { value: '2', text: 'two' },
        { value: '3', text: 'three' },
    ]);

    const record = { value: '1' };

    return (
        <SelectField
            source="value"
            record={record}
            choices={choices}
            optionText="text"
            optionValue="value"
            emptyText={emptyText}
        />
    );
};

export const text_field = () => {
    const textValue = text('text', 'Text Field');
    const record = { value: textValue };

    return <TextField record={record} source="value" />;
};

export const url_field = () => {
    const urlValue = text('Url', 'https://marmelab.com');
    const record = { value: urlValue };

    return <UrlField record={record} source="value" />;
};
