import React from 'react'
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

function FrmCheckbox({ name, ...other }) {
    const { control } = useFormContext();
    return (
        <FormControlLabel label="Remember Me" control={
            <Controller name={name} control={control} render={({ field }) =>
                <Checkbox {...field} checked={field.value} />
            } />
        } {...other} />
    )
}

export default FrmCheckbox