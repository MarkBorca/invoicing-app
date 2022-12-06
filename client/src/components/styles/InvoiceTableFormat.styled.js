import styled from 'styled-components';

const InvoiceTableFormat = styled.div`
    width: 95%;
    margin: 0 auto;

    .header{
        height: 60px;
        width: 100%;
        display: flex;
    }
    
    .table-container{
        background-color: white;
        height: 685px;
        border: 2px solid black;
        border-bottom: 0;
    }

    .pagination-container{
        background-color: grey;
        width: calc(100% - 4px);
        height: 30px;
        border: 2px solid black;
        border-top: 1px solid #dddddd;
    }

    .DataRow:hover{
        background-color: grey;
        cursor: pointer;
    }
    .DataRow{
        height: 35px;
    }

    .id-th{
        width: 70px;
    }
    .client-th{
        width: 200px;
    }
    .description-th{

    }
    .date-th{
        width: 110px;
    }
    .price-th{
        width: 182px;
    }
    .newInvoice-th{
        width: 150px;
    }

    .title-filed p{
        margin: 0;
    }

    .filter-field{
        background-color: white;
    }

    .client-input{
        width: 95%;
        border-radius:5px;
    }
    .description-input{
        width: 99%;
        border-radius:5px;
    }
    .price-input{
        width: 80px;
        border-radius:5px;
        margin-right: 3px;
    }
    .date-input{
        width: 100px;
        border-radius:5px;
    }
    .date-input:nth-child(2){
        margin-right: 5px;
    }
    

    .filter-field td button{
        background-color: lightgreen;
        display: flex;
        flex-direction: row;
    }
    .IoAddOutline{
        width: 35px;
        height: 35px;
        margin-top: -1px;
    }
    .filter-field td button p{
        margin: 2px 0 0;
    }

    .edit-delete-field{
        justify-content: space-around;
    }
    .edit-button{
        background-color: lightgreen;
        width: 48%;
        margin-right: 4%;
    }
    .delete-button{
        background-color: red;
        width: 48%;
    }

    input, textarea{
        border: 1px solid black;
    }
    input:hover, textarea:hover{
        border-color: red;
    }
    button{
        border: 1px solid black;
        border-radius: 5px;
    }
    button:hover{
        cursor: pointer;
    }

    
`

export default InvoiceTableFormat;