'use client'

import React from 'react'
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface Props {
    name: string;
    label: string;
}

const TextFieldInput: React.FC<Props> = (props) => {
    const { name, label } = props;

    const methods = useFormContext();
    const { control } = methods;

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                />
            )}
        />
    )
}

export default TextFieldInput;