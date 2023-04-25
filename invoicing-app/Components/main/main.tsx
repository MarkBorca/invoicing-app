export default function Main(props) {
    return (
        <div className={`min-h-full ease-in-out duration-300 flex flex-col ${props.navState ? 'w-[calc(100%-20rem)]' : 'w-[calc(100%-5rem)]'}`}>
            <div className="bg-gray-300 w-full h-10 mb-4">

            </div>
            <div className='bg-gray-800 w-[95%] min-h-[calc(100vh-4rem)] mx-auto'>
                {props.children}
            </div>
        </div>
    )
}