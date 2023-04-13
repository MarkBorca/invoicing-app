import ClientIcon from '/public/icons/client-icon.svg'

export default function SuggestionBoxSm({description, date, client}) {
    //icon: text -> name of the icon
    //description: text -> output

    return(
        <div className=" h-10 w-full border-b-[1px] border-gray-403 hover:bg-slate-200 cursor-pointer rounded-sm flex text-md">
            <div className='w-[60px]'>
                <div className="bg-[#F6D635] w-7 h-7 p-[2px] my-[6px] mx-auto rounded-sm ">
                    <ClientIcon className='w-5 h-5 fill-gray-700' />
                </div>
            </div>
            <div className='w-[calc(100%-60px)] flex'>
                <p className="leading-[2.5rem] px-2">Borca Mark</p>
            </div>
            
        </div>
    )
}