import NavIcon from '/public/icons/grid-view-icon.svg'

export default function NavButton({navState, setNavState}) {
    return(
        <button className={`hover:bg-[#00000023] rounded-md w-11 h-11 my-0.5 z-50 transition duration-300 ease-in-out ${navState ? 'rotate-90 mx-8' : 'mx-2.5' } `} onClick={ () => { !navState ? setNavState(true) : setNavState(false) } }>
            <NavIcon className="w-7 h-7 m-2 fill-gray-900" />
        </button>
    )
}