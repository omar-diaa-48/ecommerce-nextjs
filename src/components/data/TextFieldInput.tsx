import React, { useEffect } from 'react'
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface Props {
    name: string;
    label: string;
    type?: 'text' | 'password';
}

const TextFieldInput: React.FC<Props> = (props) => {
    const { name, label, type = 'text' } = props;

    const methods = useFormContext();
    const { control } = methods;

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => {
                console.log({ error, value });

                return (
                    <TextField
                        helperText={error ? error.message : null}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        variant="outlined"
                        label={label}
                        type={type}
                    />
                )
            }}
        />
    )
}

export default TextFieldInput;