export default function NavSearchBar({ navState }) {
    return (
        <div className={` overflow-hidden ease-in-out duration-300 rounded-xl flex ${navState ? 'w-60' : 'w-12'} bg-slate-100 hover:bg-slate-200 mx-auto mt-3 text-slate-600`}>
            <span className='material-icons-outlined  w-12 h-10 py-2 px-3 block'>search</span>
            <div className={` delay-100 ease-in-out duration-200 ${navState ? 'w-52' : 'w-0 hidden delay-100'}`}>
                <input type="text" placeholder='Search...' className={` bg-inherit w-full h-full focus:outline-none`} />
            </div>
        </div>
    )
}