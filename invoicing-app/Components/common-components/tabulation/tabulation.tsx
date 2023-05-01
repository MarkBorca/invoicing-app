export default function Tabulation() {
    return (
        <div className='min-w-80 h-10 relative flex flex-row '>
            <div className=' h-full flex flex-row items-center'>
                <button className='bg-white border-[1px] border-gray-500 text-gray-600 w-8 h-8 rounded-lg flex justify-center items-center hover:bg-gray-200'>
                    <span className='material-icons-sharp'>arrow_left</span>
                </button>
                <button className='bg-blue-50 border-blue-500 text-blue-600 border-[2px] font-medium ml-1 w-8 h-8 rounded-lg flex justify-center items-center hover:bg-blue-200'>
                    <span className=''>1</span>
                </button>
                <button className='bg-white border-[1px] border-gray-500 text-gray-600 ml-1 w-8 h-8 rounded-lg flex justify-center items-center hover:bg-gray-200'>
                    <span className=''>2</span>
                </button>
                <button className='bg-white border-[1px] border-gray-500 text-gray-600 ml-1 w-8 h-8 rounded-lg flex justify-center items-center hover:bg-gray-200'>
                    <span className=''>3</span>
                </button>
                <button className='bg-white border-[1px] border-gray-500 text-gray-600 ml-1 w-8 h-8 rounded-lg flex justify-center items-center hover:bg-gray-200'>
                    <span className='material-icons-sharp'>arrow_right</span>
                </button>
            </div>
        </div>
    );
}
