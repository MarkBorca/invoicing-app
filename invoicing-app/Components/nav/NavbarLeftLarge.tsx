
export default function NavbarLeftLarge({navState}) {
    return(
        <div className={` bg-red-400 w-80 h-screen absolute top-0 left-0 z-20 ${navState ? 'block' : 'hidden'}`}>
            <div></div>
        </div>
    )
}