import NavIcon from '/public/icons/grid-view-icon.svg'

export default function NavButton({navState, setNavState}) {
    return(
        <button className={`w-7 h-7 m-2.5 z-30 transition duration-300 ease-in-out ${navState ? 'rotate-90' : '' } `} onClick={ () => { !navState ? setNavState(true) : setNavState(false) } }>
            <NavIcon className="w-7 h-7 fill-black" />
        </button>
    )
}