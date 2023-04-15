import ClientIcon from '/public/icons/client-icon.svg'
import InvoiceIcon from '/public/icons/invoice-icon.svg'

/**
 * 
 * @param data receives an object containing data depending on the component 
 */
export default function WidgetSmall({name, data}){
    if (name === 'Client') {
        return(
            <div className=" h-10 w-full border-b-[1px] border-gray-403 hover:bg-slate-200 cursor-pointer rounded-sm flex text-md">
            <div className='w-[60px]'>
                <div className="bg-yellow-400 w-7 h-7 p-[2px] my-[6px] mx-auto rounded-sm ">
                    <ClientIcon className='w-5 h-5 fill-gray-700' />
                </div>
            </div>
            <div className='w-[calc(100%-60px)] flex'>
                <p className="leading-[2.5rem] px-2">{data.clientName}</p>
            </div>
        </div>
        )
    } 
    else if (name === 'Invoice') {
        return (
            <div className=" h-10 w-full border-b-[1px] border-gray-403 hover:bg-slate-200 cursor-pointer rounded-sm flex text-md">
            <div className='w-[60px]'>
                <div className="bg-blue-400 w-7 h-7 p-[2px] my-[6px] mx-auto rounded-sm ">
                    <InvoiceIcon className='w-5 h-5 m-[2px] fill-gray-700' />
                </div>
            </div>
            <div className='w-[calc(100%-60px)] flex justify-between'>
                <p className="leading-[2.5rem] px-2 w-1/3">Invoice {data.id}</p>
                <p className="leading-[2.5rem] px-4 w-1/3 text-center">{data.clientName}</p>
                <p className="leading-[2.5rem] px-2 w-1/3 text-right">{data.date}</p>
            </div>
            
        </div>
        )
    }
    else if (name === 'Quotation') {
        return (
            <div className=" h-10 w-full border-b-[1px] border-gray-403 hover:bg-slate-200 cursor-pointer rounded-sm flex text-md">
            <div className='w-[60px]'>
                <div className="bg-green-400 w-7 h-7 p-[2px] my-[6px] mx-auto rounded-sm ">
                    <InvoiceIcon className='w-5 h-5 m-[2px] fill-gray-700' />
                </div>
            </div>
            
            <div className='w-[calc(100%-60px)] flex justify-between'>
                <p className="leading-[2.5rem] px-2 w-1/3">Quotation {data.id}</p>
                <p className="leading-[2.5rem] px-4 w-1/3 text-center">{data.clientName}</p>
                <p className="leading-[2.5rem] px-2 w-1/3 text-right">{data.date}</p>
            </div>
        </div>
        )
    }
}