export default function Table(props) {
    return (
        <div className="w-full min-h-full flex flex-col ">
            {props.children}
        </div>
    )
}