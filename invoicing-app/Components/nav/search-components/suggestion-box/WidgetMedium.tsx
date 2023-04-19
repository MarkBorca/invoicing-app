"use client"

import Link from 'next/link'

import AddClientIcon from '/public/icons/add-client.svg'
import InvoiceIcon from '/public/icons/invoice-icon.svg'
import EmailIcon from '/public/icons/email-icon.svg'


export default function WidgetMedium({name}){
    if (name === 'Client') {
        return (
            <Link href='/'>
            <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex" onClick={() => console.log(999999999999995555)}>
                <div className='w-[60px]'>
                    <div className='bg-yellow-400 my-1.5 mx-auto w-11 h-11 p-2 rounded-sm'>
                        <AddClientIcon className=" w-8 h-8 fill-gray-700"/>
                    </div>
                </div>
                <p className="leading-[56px] w-min-20 px-2">Add a new client</p>
            </div>
            </Link>
        )
    }
    else if (name === 'Invoice') {
        return (
            <Link href='/'>
            <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex">
            <div className='w-[60px]'>
                <div className='bg-blue-400 my-1.5 mx-auto w-11 h-11 p-2 rounded-sm'>
                    <InvoiceIcon className=" w-8 h-8 fill-gray-700 ml-[-2px] mt-[-2px]"/>
                </div>
            </div>
            
            <p className="leading-[56px] w-min-20 px-2">Create a new invoice</p>
            </div>
            </Link>
        )
    }
    else if (name === 'Quotation') {
        return (
            <Link href='/'>
            <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex">
                <div className='w-[60px]'>
                    <div className='bg-green-400 my-1.5 mx-auto w-11 h-11 p-2 rounded-sm'>
                        <InvoiceIcon className=" w-8 h-8 fill-gray-700 ml-[-2px] mt-[-2px]"/>
                    </div>
                </div>
                <p className="leading-[56px] w-min-20 px-2">Create a new quotation</p>
            </div>
            </Link>
        )
    }
    else if (name === 'Email') {
        return (
            <Link href='/'>
            <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex">
                <div className='w-[60px]'>
                    <div className='bg-purple-400 my-1.5 mx-auto w-11 h-11 p-1.5 rounded-sm'>
                        <EmailIcon className=" w-8 h-8 fill-gray-700"/>
                    </div>
                </div>
                <p className="leading-[56px] w-min-20 px-2">Write a new email</p>
            </div>
            </Link>
        )
    }
}