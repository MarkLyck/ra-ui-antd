// @ts-nocheck
import React, { FC, useState } from 'react';
import { useTranslate } from 'ra-core';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TextInput, { TextInputProps } from './TextInput';

export interface PasswordInputProps extends TextInputProps {
    initiallyVisible?: boolean;
}

const PasswordInput: FC<PasswordInputProps> = ({
    initiallyVisible = false,
    ...props
}) => {
    const [visible, setVisible] = useState(initiallyVisible);
    const translate = useTranslate();

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <TextInput
            {...props}
            type={visible ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={translate(
                                visible
                                    ? 'ra.input.password.toggle_visible'
                                    : 'ra.input.password.toggle_hidden'
                            )}
                            onClick={handleClick}
                        >
                            {visible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default PasswordInput;