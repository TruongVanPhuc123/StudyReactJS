import { React, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import FormProvider from './components/form/FrmProvider'
import FrmTextField from './components/form/FrmTextField';
import FrmCheckbox from './components/form/FrmCheckbox';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"

function App() {
  const defaultValues = {
    email: "tvphuc2k4@gmail.com",
    username: "tvphuc2k4",
    password: "123",
    remember: true
  };

  const methods = useForm({ defaultValues })
  const [showPassword, setShowPassword] = useState('password')

  const { reset, setError, handleSubmit, control, formState: { errors, isSubmitting } } = methods;

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
    setError("afterSubmit", { message: "server error" })
  }
  return (
    <div>
      <Typography variant='h3' textAlign={"center"} mb={3}>
        React hook form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}

            <FrmTextField name="username" label="Username" />
            <FrmTextField name="email" label="Email" />
            <FrmTextField name="password" label="Password"
              type={showPassword ? 'password' : 'text'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FrmCheckbox name={"remember"} label="Remember Me" />
          </Stack>

          <LoadingButton size='large' type='submit' variant='contained' fullWidth loading={isSubmitting}>
            Login
          </LoadingButton>
        </FormProvider>
      </form >
    </div >

  );
}

export default App;


