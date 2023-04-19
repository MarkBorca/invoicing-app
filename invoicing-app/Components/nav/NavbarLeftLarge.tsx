"use state"
"use client"

import LargeNavWidget from './large-nav-components/widget'

export default function NavbarLeftLarge({ navState, setNavState}) {
    return (
        <div className={`${navState ? "block" : "hidden"}`}>
            <div className={` bg-slate-400 w-28 h-screen absolute top-0 left-0 z-20 `}>
                <div className=" w-5/6 h-[385px] mt-16 mx-auto">
                        <LargeNavWidget name='Home'/>
                        <LargeNavWidget name='Invoices'/>
                        <LargeNavWidget name='Quotations'/>
                        <LargeNavWidget name='Clients'/>
                        <LargeNavWidget name='Emails'/>
                </div>
            </div>
            <div className='absolute top-0 right-0 bg-black bg-opacity-70 w-[calc(100vw-7rem)] h-screen z-50' onClick={() => setNavState(false)}></div>
        </div>
            
    );
}
