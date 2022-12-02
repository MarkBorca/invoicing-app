import React from 'react';
import NavContainer from './styles/NavContainer.styled';


function Nav() {
    return (
        <NavContainer>
            <ul>
                <li>Invoices</li>
                <li>Quotations</li>
                <li>Clients</li>
            </ul>
        </NavContainer>
    )
}

export default Nav;
