export default function Main(props) {
    return (
        <div
            className={`min-h-full ease-in-out duration-300 flex flex-col ${
                props.navState ? "w-[calc(100%-20rem)]" : "w-[calc(100%-5rem)]"
            }`}
        >
            <div
                className={`w-11/12 mx-auto ${
                    props.pageNavBar ? "min-h-[calc(100vh-4rem)]" : "h-screen"
                } `}
            >
                <div className='my-6 w-full h-20 flex flex-row items-center justify-between'>
                    <p className=' text-4xl font-semibold'>{props.page}</p>
                    {/** search and client btn **/}
                    <div className=' h-12 flex flex-row items-center'>
                        <div className='bg-white h-10 rounded-md overflow-hidden drop-shadow-md shadow-black mr-4 flex flex-row items-center'>
                            <span className='material-icons-outlined px-3 block'>
                                search
                            </span>
                            <input
                                type='text'
                                placeholder='Filter by keyword...'
                                className='focus:outline-none w-80 h-9 '
                            />
                        </div>

                        <button className={`${props.page==='Emails' ? 'bg-purple-400': 'bg-green-400'} px-6 h-10 rounded-md flex flex-row items-center drop-shadow-md shadow-black`}>
                            <span className='material-icons-outlined pr-1'>
                                add_circle_outline
                            </span>
                            <p>{ props.btnValue }</p>
                        </button>
                    </div>
                </div>
                <div className='bg-white min-h-[calc(100vh-150px)] rounded-md p-6 w-full min-w-[1000px]'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
