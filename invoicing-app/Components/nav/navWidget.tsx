"use client"

import Link from "next/link"

export default function NavWidget({ navState, activePage, icon, text, link }) {
    return (
        <Link href={ link } >
        <div className={` overflow-hidden ease-in-out duration-300 rounded-xl cursor-pointer flex ${ navState ? 'w-60' : 'w-12' } ${ activePage === text ? 'bg-blue-200 hover:bg-blue-100' : 'hover:bg-slate-100' }  mx-auto mt-3 text-slate-600`}>
            <span className='material-icons-sharp  w-12 h-12 p-3 block'>{ icon }</span>
            <div className={` delay-100 ease-in-out duration-200 ${ navState ? 'w-52' : 'w-0' }`}>
                <p className='bg-red w-full h-full font-medium text-slate-700 p-[11px]'>{ text }</p>
            </div>
        </div>
        </Link>
    )
}