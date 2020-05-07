import React from 'react';
import ActionDelete from '@material-ui/icons/Delete';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import {
    BulkDeleteButton,
    BulkDeleteWithConfirmButton,
    BulkDeleteWithUndoButton,
    BulkExportButton,
    Button,
    CloneButton,
    CreateButton,
    DeleteButton,
    DeleteWithConfirmButton,
    DeleteWithUndoButton,
    EditButton,
    ExportButton,
    ListButton,
    SaveButton,
    ShowButton,
    RefreshButton,
    RefreshIconButton,
} from './index';

export default {
    title: 'DONE_button',
    decorators: [withKnobs],
};

export const bulk_delete_button = () => {
    const undoable = boolean('undoable', false);
    const label = text('label', undefined);

    return (
        <BulkDeleteButton
            icon={<ActionDelete />}
            resource="test"
            selectedIds={[1, 2, 3]}
            undoable={undoable}
            label={label}
        />
    );
};

export const bulk_delete_with_confirm_button = () => {
    const label = text('label', undefined);
    const confirmTitle = text('confirm title', undefined);
    const confirmContent = text('confirm content', undefined);

    return (
        <BulkDeleteWithConfirmButton
            icon={<ActionDelete />}
            resource="test"
            selectedIds={[1, 2, 3]}
            label={label}
            confirmTitle={confirmTitle}
            confirmContent={confirmContent}
        />
    );
};

export const bulk_delete_with_undo_button = () => {
    const label = text('label', undefined);

    return (
        <BulkDeleteWithUndoButton
            icon={<ActionDelete />}
            resource="test"
            selectedIds={[1, 2, 3]}
            label={label}
        />
    );
};

export const bulk_export_button = () => {
    const label = text('label', undefined);

    return (
        <BulkExportButton
            resource="test"
            selectedIds={[1, 2, 3]}
            label={label}
        />
    );
};

export const clone_button = () => {
    const label = text('label', undefined);

    return <CloneButton label={label} />;
};

export const create_button = () => {
    const label = text('label', undefined);

    return <CreateButton label={label} />;
};

export const delete_button = () => {
    const label = text('label', undefined);
    const undoable = boolean('undoable', false);

    return (
        <DeleteButton
            record={{ id: 1 }}
            resource="test"
            label={label}
            undoable={undoable}
        />
    );
};

export const delete_with_confirm_button = () => {
    const label = text('label', undefined);
    const confirmTitle = text('confirm title', undefined);
    const confirmContent = text('confirm content', undefined);

    return (
        <DeleteWithConfirmButton
            record={{ id: 1 }}
            resource="test"
            label={label}
            confirmTitle={confirmTitle}
            confirmContent={confirmContent}
        />
    );
};

export const delete_with_undo_button = () => {
    const label = text('label', undefined);
    return <DeleteWithUndoButton label={label} />;
};

export const edit_button = () => {
    const label = text('label', undefined);
    return <EditButton label={label} />;
};

export const export_button = () => {
    const label = text('label', undefined);
    return <ExportButton label={label} />;
};
export const list_button = () => {
    const label = text('label', undefined);
    return <ListButton label={label} />;
};
export const save_button = () => {
    const label = text('label', undefined);
    const saving = boolean('saving', false);
    const invalid = boolean('invalid', false);
    const submitOnEnter = boolean('submitOnEnter', false);
    const pristine = boolean('pristine', false);

    return (
        <SaveButton
            label={label}
            onSave={console.log}
            saving={saving}
            invalid={invalid}
            pristine={pristine}
            submitOnEnter={submitOnEnter}
        />
    );
};
export const show_button = () => {
    const label = text('label', undefined);
    return <ShowButton label={label} />;
};
export const refresh_button = () => {
    const label = text('label', undefined);
    return <RefreshButton label={label} />;
};
export const refresh_icon_button = () => {
    const label = text('label', undefined);
    return <RefreshIconButton label={label} />;
};

export const button = () => {
    const button_text = text('Text', 'Test');

    return (
        <Button>
            <span>{button_text}</span>
        </Button>
    );
};
