import AddClientIcon from '/public/icons/add-client.svg'

export default function SuggestionBoxMd() {
    return(
        <div className=" h-14 w-full border-b-[1px] border-gray-300 hover:bg-slate-200 cursor-pointer rounded-sm flex">
                <div className='w-[60px]'>
                    <div className='bg-[#F6D635] my-1.5 mx-auto w-11 h-11 p-2 rounded-sm'>
                        <AddClientIcon className=" w-8 h-8 fill-gray-700"/>
                    </div>
                </div>
                <p className="leading-[56px] w-min-20 px-2">Add a new client</p>
        </div>
    )
}