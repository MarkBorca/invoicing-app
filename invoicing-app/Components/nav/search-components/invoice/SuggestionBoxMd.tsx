import InvoiceIcon from '/public/icons/invoice-icon.svg'

export default function SuggestionBoxMd() {
    return(
        <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex">
                <div className='w-[60px]'>
                    <div className='bg-[#35f64f] my-1.5 mx-auto w-11 h-11 p-2 rounded-sm'>
                        <InvoiceIcon className=" w-8 h-8 fill-gray-700 ml-[-2px] mt-[-2px]"/>
                    </div>
                </div>
                
                <p className="leading-[56px] w-min-20 px-2">Create a new invoice</p>
        </div>
    )
}