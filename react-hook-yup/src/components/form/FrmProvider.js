import React from 'react'
import { FormProvider as RHFormProvider } from 'react-hook-form'

export default function FrmProvider({ children, onSubmit, methods }) {
    return (
        <RHFormProvider {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </RHFormProvider>
    )
}
