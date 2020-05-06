import React, { FunctionComponent } from 'react';
import get from 'lodash/get';
import pure from 'recompose/pure';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

import sanitizeRestProps from './sanitizeRestProps';
import { FieldProps, InjectedFieldProps, fieldPropTypes } from './types';

const TextField: FunctionComponent<
    FieldProps & InjectedFieldProps & TypographyProps
> = ({ className, source, record = {}, emptyText, ...rest }) => {
    const value = get(record, source);

    return (
        <Typography
            component="span"
            variant="body2"
            className={className}
            {...sanitizeRestProps(rest)}
        >
            {value != null && typeof value !== 'string'
                ? JSON.stringify(value)
                : value || emptyText}
        </Typography>
    );
};

// wat? TypeScript looses the displayName if we don't set it explicitly
TextField.displayName = 'TextField';

const EnhancedTextField = pure(TextField);

EnhancedTextField.defaultProps = {
    addLabel: true,
};

EnhancedTextField.propTypes = {
    // @ts-ignore
    ...Typography.propTypes,
    ...fieldPropTypes,
};

EnhancedTextField.displayName = 'EnhancedTextField';

export default EnhancedTextField;
