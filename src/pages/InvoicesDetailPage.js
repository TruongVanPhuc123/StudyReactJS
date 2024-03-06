import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getInvoice, deleteInvoice } from '../data'

function InvoicesDetailPage() {
    let navigate = useNavigate()
    let location = useLocation()
    const params = useParams();

    let invoice = getInvoice(parseInt(params.invoiceId, 10))

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amounth}</h2>
            <p>
                {invoice.name}: {invoice.notes}
            </p>
            <p>
                Due Date: {invoice.date}
            </p>
            <p>
                <button onClick={() => {
                    deleteInvoice(invoice.notes);
                    navigate("/invoices" + location.search)
                }}> Delete</button>
            </p>
        </main>
    )
}

export default InvoicesDetailPage