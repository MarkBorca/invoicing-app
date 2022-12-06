import styled from 'styled-components';


const ClientsTableFormat = styled.div`
    background-color: white;
    width: 75%;
    height: 722px;
    margin: 0 auto;
    border: 2px solid black;

    .header{
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .header input{
        width: 250px;
        height: 22px;
        margin: 26px 0 26px 20px;
        border: 1px solid black;
        border-radius: 5px;
    }
    .header button{
        background-color: lightgreen;
        width: 200px;
        height: 45px;
        margin: 19px 20px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
    }
    .header button .IoAddOutline{
        width: 38.5px;
        height: 38.5px;
    }
    .header button p{

    }

    .table-container{
        background-color: red;
        width: calc(100% 4px);
        height: calc(100% - 80px - 1px - 35px);
        border-top: 1px solid black;
    }
    .pagination-container{
        background-color: grey;
        width: calc(100% 4px);
        height: 35px;
    }

`

export default ClientsTableFormat;