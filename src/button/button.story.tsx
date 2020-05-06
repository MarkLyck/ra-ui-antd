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
    title: 'button',
    decorators: [withKnobs],
};

export const bulk_delete_button = () => {
    const undoable = boolean('undoable', false);

    return (
        <BulkDeleteButton
            icon={<ActionDelete />}
            resource="test"
            selectedIds={[1, 2, 3]}
            undoable={undoable}
        />
    );
};

export const bulk_delete_with_confirm_button = () => (
    <BulkDeleteWithConfirmButton
        icon={<ActionDelete />}
        resource="test"
        selectedIds={[1, 2, 3]}
    />
);

export const bulk_delete_with_undo_button = () => (
    <BulkDeleteWithUndoButton
        icon={<ActionDelete />}
        resource="test"
        selectedIds={[1, 2, 3]}
    />
);

export const bulk_export_button = () => (
    <BulkExportButton resource="test" selectedIds={[1, 2, 3]} />
);

export const clone_button = () => <CloneButton />;

export const create_button = () => <CreateButton />;

export const delete_button = () => <DeleteButton />;

export const delete_with_confirm_button = () => (
    <DeleteWithConfirmButton record={{ id: 1 }} resource="test" />
);
export const delete_with_undo_button = () => <DeleteWithUndoButton />;

export const edit_button = () => <EditButton />;
export const export_button = () => <ExportButton />;
export const list_button = () => <ListButton />;
export const save_button = () => <SaveButton />;
export const show_button = () => <ShowButton />;
export const refresh_button = () => <RefreshButton />;
export const refresh_icon_button = () => <RefreshIconButton />;

export const button = () => {
    const button_text = text('Text', 'Test');

    return (
        <Button>
            <span>{button_text}</span>
        </Button>
    );
};
