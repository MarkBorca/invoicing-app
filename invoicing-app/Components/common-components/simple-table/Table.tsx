export default function Table(props) {
    return (
        <div className="bg-green w-full min-h-full flex flex-col ">
            {props.children}
        </div>
    )
}