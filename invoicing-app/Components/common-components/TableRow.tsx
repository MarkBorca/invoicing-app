import InvoiceIcon from '/public/icons/invoice-icon.svg'

export default function TableRow({id, clientName, date, price, color}) {
    return(
        <div className="bg-green hover:bg-gray-200 w-full h-12 cursor-pointer flex flex-row border-gray-200 border-b-[1px] place-items-center">
            <div className="bg-blue w-[70px]">
                <InvoiceIcon className={`w-8 h-8 ${color==='blue'? 'fill-blue-800' : 'fill-green-600'} mx-auto`} />
            </div>
            <p className="bg-blue w-[15%] min-w-[100px] ">{id}</p>
            <p className="bg-blue w-[40%] min-w-[150px] ">{clientName}</p>
            <p className="bg-blue w-[15%] min-w-[100px] ">{date}</p>
            <p className="bg-blue w-[calc(30%-70px)] min-w-[150px] text-right">{price}</p>
        </div>
    )
}