import React from 'react'
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

function FrmTextField({ name, ...other }) {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                    {...other} />
            )}>
        </Controller>
    )
}

export default FrmTextField