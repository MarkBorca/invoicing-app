import React from 'react';
import NavContainer from './styles/NavContainer.styled';


function Nav() {
    return (
        <NavContainer>
            <ul>
                <li>
                    <span>Invoices</span>
                    <div className='under-line'></div>
                </li>
                <li>
                    <span>Quotations</span>
                    <div className='under-line'></div>
                </li>
                <li>
                    <span>Clients</span>
                    <div className='under-line'></div>
                </li>
            </ul>
        </NavContainer>
    )
}

export default Nav;
