import React from 'react';
import ClientsTableFormat from './styles/ClientsTableFormat.styled';
import Table from './styles/TableFormat.styled';
import { IoAddOutline } from 'react-icons/io5';


function ClientTable() {
    return(
        <ClientsTableFormat>
            <div className='header'>
                <input placeholder='Name'></input>
                <button>
                    <IoAddOutline className='IoAddOutline'></IoAddOutline>
                    <p>Add new client</p>
                </button>
            </div>
            <div className='table-container'>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>VAT</th>
                            <th>Adress</th>
                            <th colSpan={2}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viorel Borca</td>
                            <td>Viobor</td>
                            <td>BE735985654</td>
                            <td>1410 Waterloo <br/>Rue de l'Infante</td>
                            <td>viorel_borca@yahoo.com</td>
                            <td>[ ][ ]</td>
                        </tr>
                    </tbody>
                </Table>
                
            </div>
            <div className='pagination-container'>

            </div>
        </ClientsTableFormat>
    )
}

export default ClientTable;