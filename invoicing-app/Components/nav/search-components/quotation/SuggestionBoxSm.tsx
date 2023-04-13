import InvoiceIcon from '/public/icons/invoice-icon.svg'

export default function SuggestionBoxSm({description, date, client}) {
    return(
        <div className=" h-10 w-full border-b-[1px] border-gray-403 hover:bg-slate-200 cursor-pointer rounded-sm flex text-md">
            <div className='w-[60px]'>
                <div className="bg-[#359ff6] w-7 h-7 p-[2px] my-[6px] mx-auto rounded-sm ">
                    <InvoiceIcon className='w-5 h-5 m-[2px] fill-gray-700' />
                </div>
            </div>
            
            <div className='w-[calc(100%-60px)] flex justify-between'>
                <p className="leading-[2.5rem] px-2">Quotation 01</p>
                <p className="leading-[2.5rem] px-4">Borca Mark</p>
                <p className="leading-[2.5rem] px-2">24/04/2023</p>
            </div>
        </div>
    )
}