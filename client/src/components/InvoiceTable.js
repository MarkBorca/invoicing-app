import React from 'react';
import InvoiceTableFormat from './styles/InvoiceTableFormat.styled';
import Table from './styles/TableFormat.styled';
import { IoAddOutline } from 'react-icons/io5';


function InvoiceTable() {
    let data = [
        {
            id: 1,
            client: 'mark borca',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 2,
            client: 'dude one',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 3,
            client: 'dude two',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: false
        },
        {
            id: 1,
            client: 'mark borca',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 2,
            client: 'dude one',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 3,
            client: 'dude two',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: false
        },
        {
            id: 1,
            client: 'mark borca',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 2,
            client: 'dude one',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 3,
            client: 'dude two',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: false
        },
        {
            id: 1,
            client: 'mark borca',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 2,
            client: 'dude one',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 3,
            client: 'dude two',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: false
        },
        {
            id: 1,
            client: 'mark borca',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 2,
            client: 'dude one',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: true
        },
        {
            id: 3,
            client: 'dude two',
            description: 'Renovation',
            date: '20/11/2022',
            price: 7452.55,
            state: false
        }
    ];

    return (
        <InvoiceTableFormat>
            <div className='header'>
                
            </div>
            <div className='table-container'>
                <Table>
                    <thead>
                        <tr className='title-filed'>
                            <th className='id-th'>
                                <p>Id</p>
                            </th>
                            <th className='client-th'>
                                <p>Client</p>
                            </th>
                            <th className='description-th'>
                                <p>Description</p>
                            </th>
                            <th className='date-th'>
                                <p>Date</p>
                            </th>
                            <th className='price-th'>
                                <p>Price</p>
                            </th>
                            <th className='newInvoice-th'>

                            </th>
                        </tr>
                        <tr className='filter-field'>
                            <td></td>
                            <td>
                                <input name='client' className='client-input' />
                            </td>
                            <td>
                                <textarea name='description' className='description-input' />
                            </td>
                            <td>
                                <input name='' className='date-input' type="date" />
                                <input name='' className='date-input' type="date" />
                            </td>
                            <td>
                                <input name='' className='price-input' placeholder='min' />
                                <input name='' className='price-input' placeholder='max' />
                            </td>
                            <td>
                                <button>
                                    <IoAddOutline className='IoAddOutline'></IoAddOutline>
                                    <p>Create new invoice</p>
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(
                                (i) => {
                                    return (
                                        <tr className='DataRow' key={i.id}>
                                            <td>{i.id}</td>
                                            <td>{i.client}</td>
                                            <td>{i.description}</td>
                                            <td>{i.date}</td>
                                            <td>€ {i.price}</td>
                                            <td className='edit-delete-field'>
                                                <button className='edit-button'>Edit</button>
                                                <button className='delete-button'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </div>

            <div className='pagination-container'>

            </div>
        </InvoiceTableFormat>
    );
}

export default InvoiceTable;