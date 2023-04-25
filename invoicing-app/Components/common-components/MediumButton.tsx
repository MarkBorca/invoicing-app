export default function MediumButton({value, style}) {
    return(
        <button className={`${style} px-8 py-2 rounded-sm border-[1px] border-black drop-shadow-md shadow-black`}>
            {value}
        </button>
    )
}