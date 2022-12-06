import React from 'react';
import MainPageContainer from './styles/MainPage.styled';
import InvoiceTable from './InvoiceTable';
import ClientsTable from './ClientsTable';
import Nav from './Nav';


function MainPage() {
    return (
        <MainPageContainer>
            <Nav />
            <ClientsTable />
            <InvoiceTable />
        </MainPageContainer>
    )
}

export default MainPage;
