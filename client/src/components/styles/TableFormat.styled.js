import styled from 'styled-components';

const Table = styled.table`

    width: 100%;
    border-collapse: collapse;
    font-family: arial, sans-serif;

    th{
        background-color: white;
    }
    th, td {
        border-right: 1px solid #dddddd;
        text-align: left;
        padding: 8px;  
    }
    tr:nth-child(odd) {
        background-color: #dddddd;
    }
    tr:nth-child(even) {
        background-color: white;
    }
    .DataRow:hover{
        background-color: grey;
        cursor: pointer;
    }

    .CreateNewButton td{
        background-color: white;
        text-align: center;
        text-decoration: underline;
    }
    .CreateNewButton td:hover{
        background-color: red;
        cursor: pointer;
    }

    .id-th{
        width: 70px;
    }
    .client-th{
        width: 200px;
    }
    .description-th{
        width: ;
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

export default Table;