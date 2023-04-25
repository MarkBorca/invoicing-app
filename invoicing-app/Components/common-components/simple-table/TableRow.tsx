export default function TableRow(props) {
    return(
        <div className="bg-green hover:bg-gray-200 w-full h-12 cursor-pointer flex flex-row border-gray-200 border-b-[1px] place-items-center">
            {props.children}
        </div>
    )
}