import styled from 'styled-components';


const TableFormat = styled.table`

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


`

export default TableFormat;