"use client"

import NavButton from './NavButton'
import NavbarLeftLarge from './NavbarLeftLarge'

import ClientSuggestionBoxSm from './search-components/client/SuggestionBoxSm'
import ClientSuggestionBoxMd from './search-components/client/SuggestionBoxMd'

import InvoiceSuggestionBoxSm from './search-components/invoice/SuggestionBoxSm'
import InvoiceSuggestionBoxMd from './search-components/invoice/SuggestionBoxMd'

import QuotationSuggestionBoxSm from './search-components/quotation/SuggestionBoxSm'
import QuotationSuggestionBoxMd from './search-components/quotation/SuggestionBoxMd'

import { useState } from 'react'

export default function TopNavbar() {
    let [navState, setNavState] = useState(false);
    let [searchFocus, setSearchFocus] = useState(false);
    let [searchState, setSearchState] = useState(false);

    const searchBar = (input, searchState, setSearchState) => {
    
        if(input.length >= 1){
            setSearchState(true)
        }
        else{
            setSearchState(false)
        }
    }
    
    return(
        <nav className="w-screen bg-blue-500 h-12 flex flex-row z-10 drop-shadow-sm relative">
            <NavButton navState={navState} setNavState={setNavState} />
            <h2 className='font-bold text-2xl leading-[50px] mx-7'>Invoicing</h2>

            <div className=' z-40  w-2/5 h-9 flex pl-3 bg-white rounded-md overflow-hidden my-[calc(calc(48px-36px)/2)] absolute left-1/2 top1/2 translate-x-[-50%] border-[1px] border-slate-950 drop-shadow-md hover:shadow-xl'>
                <input 
                    type="text" 
                    className='h-9 w-full focus:outline-none' 
                    placeholder='Search...' 
                    onFocus={ () => 
                    setSearchFocus(!searchFocus) } 
                    onChange={ event => { searchBar(event.target.value, searchState, setSearchState) } } 
                    onBlur={ () => setSearchFocus(!searchFocus) } 
                />
            </div>

            <div className={`z-40 absolute top-11 left-1/2 translate-x-[-50%] w-2/5 min-h-[100px] max-h-[300px] p-[10px] bg-white border-black border-[1px] rounded-md overflow-y-auto overflow-x-hidden ${searchFocus ? 'block' : 'hidden'}`}>
                
                
                <div className={searchState ? 'hidden' : 'block'}>
                    <div className='w-full'>
                        <ClientSuggestionBoxMd />
                    </div>
                    <div className='w-full'>
                        <InvoiceSuggestionBoxMd />
                    </div>
                    <div className='w-full'>
                        <QuotationSuggestionBoxMd />
                    </div>
                </div>
                
                <div>
                    <ClientSuggestionBoxSm />
                    <ClientSuggestionBoxSm />
                    <QuotationSuggestionBoxSm />
                    <QuotationSuggestionBoxSm />
                    <QuotationSuggestionBoxSm />
                    <InvoiceSuggestionBoxSm />
                    <InvoiceSuggestionBoxSm />
                    <InvoiceSuggestionBoxSm />
                </div>

                
                
            </div>

            <div className={`bg-black absolute z-30 w-screen h-screen bg-opacity-70 ${searchFocus ? 'block' : 'hidden'}`}></div>

            <NavbarLeftLarge navState={navState} />
        </nav>
    )
}