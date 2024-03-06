let contact = [
    {
        name: "TVPhuc",
        date: "1231",
        avatar: "https://placekitten.com/g/200/200",
        amounth: "your_handle",
        notes: 3,
        favorite: true,
    },
    {
        name: "BVPhuc2",
        date: "1231",
        avatar: "https://placekitten.com/g/200/200",
        amounth: "your_handle",
        notes: 2,
        favorite: true,
    },
    {
        name: "AVPhuc3",
        date: "1231",
        avatar: "https://placekitten.com/g/200/200",
        amounth: "your_handle",
        notes: 1,
        favorite: true,
    },
];

export default function getInvoices() {
    return contact;
};


export function deleteInvoice(notes) {
    contact = contact.filter((invoices) => invoices.notes !== notes)
}

export function getInvoice(notes) {
    return contact = contact.find((invoices) => invoices.notes === notes)
}
