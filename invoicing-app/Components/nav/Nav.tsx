"use client"

import NavButton from './NavButton'
import NavbarLeftLarge from './NavbarLeftLarge'
import SearchBar from './search-components/SearchBar'

import { useState } from 'react'

export default function TopNavbar() {
    let [navState, setNavState] = useState(false);
    
    return(
        <nav className="w-screen bg-blue-500 h-12 flex flex-row z-10 drop-shadow-sm relative">
            <NavButton navState={navState} setNavState={setNavState} />
            <h2 className='font-bold text-2xl leading-[50px] mx-7'>Invoicing</h2>

            <SearchBar />

            <NavbarLeftLarge navState={navState} />
        </nav>
    )
}