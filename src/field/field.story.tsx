import React from 'react';
import {
    withKnobs,
    text,
    boolean,
    number,
    date,
    object,
    select,
} from '@storybook/addon-knobs';

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
    RichTextField,
    SelectField,
    TextField,
    UrlField,
} from './index';

import { ReferenceFieldView } from './ReferenceField';
import { SingleFieldList, Datagrid } from '../list';

export default {
    title: 'DONE_field',
    decorators: [withKnobs],
};

const arrayRecord = {
    id: '123',
    tags: [{ name: 'item 1' }, { name: 'item 2' }, { name: 'item 3' }],
};

export const array_field = () => {
    const options = {
        SingleFieldList: 'SingleFieldList',
        DataGrid: 'DataGrid',
    };

    const iteratorType = select('Iterator Type', options, 'GROUP-ID1');

    let Iterator = (props: any) => (
        <SingleFieldList {...props}>
            <ChipField source="name" />
        </SingleFieldList>
    );

    if (iteratorType === 'DataGrid') {
        Iterator = props => (
            <Datagrid {...props}>
                <ChipField source="name" />
            </Datagrid>
        );
    }

    return (
        <ArrayField source="tags" record={arrayRecord}>
            <Iterator />
        </ArrayField>
    );
};

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
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const record = { value: chipText };

    return <ChipField record={record} source={source} emptyText={emptyText} />;
};

export const date_field = () => {
    const recordDate = date('date', new Date());
    const showTime = boolean('show Time', false);
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const locale = text('locales', 'en-US');
    const record = { value: recordDate };

    return (
        <DateField
            record={record}
            source={source}
            emptyText={emptyText}
            locales={locale}
            showTime={showTime}
        />
    );
};

export const email_field = () => {
    const emailText = text('Email', 'test@email.com');
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const record = { value: emailText };

    return <EmailField record={record} source={source} emptyText={emptyText} />;
};

export const file_field = () => {
    const record = { id: 'test', value: './test.jpg' };
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const title = text('file name', 'file name');
    const target = text('target', '_blank');

    return (
        <FileField
            record={record}
            source={source}
            emptyText={emptyText}
            target={target}
            title={title}
        />
    );
};

export const image_field = () => {
    const record = { id: 'test', value: './test.jpg' };
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const title = text('file name', 'file name');
    const src = text(
        'src',
        'https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-hip-hop-2017-6753651837108774-s.png'
    );

    return (
        <ImageField
            record={record}
            source={source}
            emptyText={emptyText}
            title={title}
            src={src}
        />
    );
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
    const locales = text('locales', 'en-US');
    const record = { value: numberValue };

    return <NumberField record={record} source="value" locales={locales} />;
};

export const reference_field_view = () => {
    const reference = text('reference', '123');
    const loading = boolean('loading', false);
    const loaded = boolean('loaded', true);
    const record = { id: 'test', value: 'test' };

    return (
        <ReferenceFieldView
            loading={loading}
            loaded={loaded}
            basePath="/test"
            record={record}
            source="value"
            reference={reference}
            referenceRecord={record}
            resource="test"
        >
            <ChipField source="value" />
        </ReferenceFieldView>
    );
};

// export const reference_array_field = () => {
//     const reference = text('reference', '123');
//     const record = { id: 'test' };

//     return (
//         <ReferenceArrayField
//             basePath="/test"
//             record={record}
//             source="value"
//             reference={reference}
//             resource="test"
//         >
//             <SingleFieldList>
//                 <ChipField source="name" />
//             </SingleFieldList>
//         </ReferenceArrayField>
//     );
// };

// export const reference_many_field = () => {
//     const reference = text('reference', 'probe');
//     const target = text('target', '123');
//     const record = { id: 'test' };

//     return (
//         <ReferenceManyField
//             basePath="/test"
//             record={record}
//             source="value"
//             reference={reference}
//             resource="test"
//             target={target}
//         >
//             <SingleFieldList>
//                 <ChipField source="name" />
//             </SingleFieldList>
//         </ReferenceManyField>
//     );
// };

export const rich_text_field = () => {
    const textValue = text('text', 'Rich text <p>field</p>');
    const stripTags = boolean('stripTags', false);
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const record = { value: textValue };

    return (
        <RichTextField
            source={source}
            record={record}
            stripTags={stripTags}
            emptyText={emptyText}
        />
    );
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
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const record = { value: textValue };

    return <TextField record={record} source={source} emptyText={emptyText} />;
};

export const url_field = () => {
    const urlValue = text('Url', 'https://marmelab.com');
    const emptyText = text('empty text', 'empty');
    const source = text('source', 'value');
    const record = { value: urlValue };

    return <UrlField record={record} source={source} emptyText={emptyText} />;
};
