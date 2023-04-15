"use client"

import SuggestionBox from './suggestion-box/SuggestionBoxContainer'

import { useState } from 'react'

/**
 * This function controls the content of the suggestion box
 * 
 * @param input value of the search bar input
 * @param searchState boolean value that will be used as a state of filled input or empty 
 * @param setSearchState 
 */
function searchBarOnChange(input, searchState, setSearchState) {
    if (input.length >= 1) {
        setSearchState(true)
    }
    else {
        setSearchState(false)
    }
}

/**
 * onBlur={() => setSearchFocus(!searchFocus)}
 */
export default function SearchBar() {
    let [searchFocus, setSearchFocus] = useState(false);
    let [searchState, setSearchState] = useState(false);

    return (
        <>
            <div className=' z-40  w-2/5 h-9 flex pl-3 bg-white rounded-md overflow-hidden my-[calc(calc(48px-36px)/2)] absolute left-1/2 top1/2 translate-x-[-50%] border-[1px] border-slate-950 drop-shadow-md hover:shadow-xl'>
                <input
                    type="text"
                    className='h-9 w-full focus:outline-none'
                    placeholder='Search...'
                    onFocus={() => setSearchFocus(!searchFocus)}
                    onChange={event => { searchBarOnChange(event.target.value, searchState, setSearchState) }}
                    
                />
            </div>
            <SuggestionBox searchFocus={searchFocus} searchState={searchState} setSearchFocus={setSearchFocus} />
        </>
    )
}