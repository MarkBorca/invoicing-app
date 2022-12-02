import React from 'react';
import InvoicingPageContainer from './styles/InvoicingPage.styled';
import InvoiceTable from './InvoiceTable';
import Nav from './Nav';


function InvoicePage() {
    return (
        <InvoicingPageContainer>
            <Nav />
            <InvoiceTable />
        </InvoicingPageContainer>
    )
}

export default InvoicePage;
