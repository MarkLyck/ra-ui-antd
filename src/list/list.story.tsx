import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import {
    BulkActionsToolbar,
    BulkDeleteAction,
    Datagrid,
    DatagridLoading,
    DatagridBody,
    DatagridRow,
    DatagridHeaderCell,
    DatagridCell,
    Filter,
    FilterButton,
    FilterForm,
    List,
    ListView,
    ListActions,
    ListGuesser,
    ListToolbar,
    Pagination,
    PaginationLimit,
    Placeholder,
    PureDatagridBody,
    PureDatagridRow,
    SimpleList,
    SimpleListLoading,
    SingleFieldList,
} from './index';
import theme from '../theme';

export default {
    title: 'list',
    decorators: [withKnobs],
};

export const bulk_action_toolbar = () => <BulkActionsToolbar />;
export const bulk_delete_action = () => <BulkDeleteAction />;
export const data_grid = () => <Datagrid />;
export const data_grid_loading = () => <DatagridLoading />;
// export const data_grid_body = () => (
//     <DatagridBody
//         basePath=""
//         classes={{}}
//         className="data-grid-body"
//         data={[]}
//         expand={false}
//         hasBulkActions={false}
//         hover={() => {}}
//         isRowSelectable={false}
//     >
//         <div>test</div>
//     </DatagridBody>
// );
// export const data_grid_row = () => <DatagridRow />;
export const data_grid_header_cell = () => <DatagridHeaderCell />;
// export const data_grid_cell = () => <DatagridCell />;
export const filter = () => <Filter />;
export const filter_button = () => <FilterButton />;
export const filter_form = () => <FilterForm />;
export const list = () => <List />;
export const list_view = () => <ListView />;
// export const list_actions = () => <ListActions />;
export const list_guesser = () => <ListGuesser />;
export const list_toolbar = () => <ListToolbar />;

export const pagination = () => {
    const loading = boolean('loading', false);
    const page = number('page', 1);
    const perPage = number('per page', 10);
    const total = number('total', 100);
    const limit = number('limit', 100);
    return (
        <Pagination
            loading={loading}
            page={page}
            perPage={perPage}
            total={total}
            setPage={console.log}
            setPerPage={console.log}
            rowsPerPageOptions={{}}
            actions={[]}
            limit={limit}
        />
    );
};

export const pagination_limit = () => <PaginationLimit />;
export const placeholder = () => <Placeholder />;

// export const pure_datagrid_body = () => <PureDatagridBody />;
// export const pure_datagrid_row = () => <PureDatagridRow />;

export const simple_list = () => <SimpleList />;
export const simple_list_loading = () => <SimpleListLoading />;
export const single_field_list = () => <SingleFieldList />;
