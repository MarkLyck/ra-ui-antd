// @ts-nocheck
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { useTranslate } from 'ra-core';

const useStyles = makeStyles(
    {
        clearIcon: {
            height: 16,
            width: 0,
        },
        visibleClearIcon: {
            width: 16,
        },
        clearButton: {
            height: 24,
            width: 24,
            padding: 0,
        },
        selectAdornment: {
            position: 'absolute',
            right: 24,
        },
        inputAdornedEnd: {
            paddingRight: 0,
        },
    },
    { name: 'RaResettableTextField' }
);

const handleMouseDownClearButton = event => {
    event.preventDefault();
};

/**
 * An override of the default Material-UI TextField which is resettable
 */
function ResettableTextField(props) {
    const {
        classes: classesOverride,
        clearAlwaysVisible,
        InputProps,
        value,
        resettable,
        disabled,
        variant = 'filled',
        margin = 'dense',
        ...rest
    } = props;
    const classes = useStyles(props);
    const translate = useTranslate();

    const { onChange, onFocus, onBlur } = props;
    const handleClickClearButton = useCallback(
        event => {
            event.preventDefault();
            onChange('');
        },
        [onChange]
    );

    const handleFocus = useCallback(
        event => {
            onFocus && onFocus(event);
        },
        [onFocus]
    );

    const handleBlur = useCallback(
        event => {
            onBlur && onBlur(event);
        },
        [onBlur]
    );

    const {
        clearButton,
        clearIcon,
        inputAdornedEnd,
        selectAdornment,
        visibleClearButton,
        visibleClearIcon,
        ...restClasses
    } = classes;

    const { endAdornment, ...InputPropsWithoutEndAdornment } = InputProps || {};

    if (clearAlwaysVisible && endAdornment) {
        throw new Error(
            'ResettableTextField cannot display both an endAdornment and a clear button always visible'
        );
    }

    const getEndAdornment = () => {
        if (!resettable) {
            return endAdornment;
        } else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return (
                    <InputAdornment
                        position="end"
                        classes={{
                            root: props.select ? selectAdornment : null,
                        }}
                    >
                        <IconButton
                            className={clearButton}
                            aria-label={translate(
                                'ra.action.clear_input_value'
                            )}
                            title={translate('ra.action.clear_input_value')}
                            disableRipple
                            disabled={true}
                        >
                            <ClearIcon
                                className={classNames(
                                    clearIcon,
                                    visibleClearIcon
                                )}
                            />
                        </IconButton>
                    </InputAdornment>
                );
            } else {
                if (endAdornment) {
                    return endAdornment;
                } else {
                    // show spacer
                    return (
                        <InputAdornment
                            position="end"
                            classes={{
                                root: props.select ? selectAdornment : null,
                            }}
                        >
                            <span className={clearButton}>&nbsp;</span>
                        </InputAdornment>
                    );
                }
            }
        } else {
            // show clear
            return (
                <InputAdornment
                    position="end"
                    classes={{
                        root: props.select ? selectAdornment : null,
                    }}
                >
                    <IconButton
                        className={clearButton}
                        aria-label={translate('ra.action.clear_input_value')}
                        title={translate('ra.action.clear_input_value')}
                        disableRipple
                        onClick={handleClickClearButton}
                        onMouseDown={handleMouseDownClearButton}
                        disabled={disabled}
                    >
                        <ClearIcon
                            className={classNames(clearIcon, {
                                [visibleClearIcon]: clearAlwaysVisible || value,
                            })}
                        />
                    </IconButton>
                </InputAdornment>
            );
        }
    };

    return (
        <MuiTextField
            classes={restClasses}
            value={value}
            InputProps={{
                classes:
                    props.select && variant === 'filled'
                        ? { adornedEnd: inputAdornedEnd }
                        : {},
                endAdornment: getEndAdornment(),
                ...InputPropsWithoutEndAdornment,
            }}
            disabled={disabled}
            variant={variant}
            margin={margin}
            {...rest}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}

ResettableTextField.propTypes = {
    classes: PropTypes.object,
    clearAlwaysVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    InputProps: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    resettable: PropTypes.bool,
    value: PropTypes.any.isRequired,
};

export default ResettableTextField;
