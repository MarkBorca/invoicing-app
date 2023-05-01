export default function TableRow(props) {
    return(
        <div className="bg-green hover:bg-gray-200 w-full  px-2 py-2 cursor-pointer flex flex-row border-gray-200 border-b-[1px] place-items-center odd:bg-gray-50">
            {props.children}
        </div>
    )
}