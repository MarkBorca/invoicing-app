export default function MediumButton({value, color}) {
    return(
        <button className={`${color==='blue'? 'bg-blue-400' : 'bg-green-400'} px-8 py-2 rounded-sm border-[1px] border-black drop-shadow-md shadow-black`}>
            {value}
        </button>
    )
}