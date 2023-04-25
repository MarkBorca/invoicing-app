export default function TableHeader(props) {
    return (
        <div className=" w-full h-10 border-gray-400 border-b-[1px] mb-2 flex flex-row place-items-center">
            {props.children}
        </div>
    )
}