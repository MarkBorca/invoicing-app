import TableRow from "./TableRow";

export default function TableRowClient({ ClientTypePrivate, name, phone, email, address }) {
    return (
        <TableRow>
            <div className='w-[50px] flex items-center justify-center'>
                <span className='material-icons-sharp'>
                    {ClientTypePrivate ? "person" : "business"}
                </span>
            </div>
            { FormatByClientType(ClientTypePrivate, name.name, name.company) }
            <div className='w-[20%] min-w-[150px] flex flex-row items-center'>
                <span className='material-icons-sharp mr-3 text-gray-500'>
                    phone
                </span>
                <p>{phone}</p>
            </div>
            <div className=' w-[30%] min-w-[100px] flex flex-row items-center'>
                <span className='material-icons-sharp mr-3 text-gray-500'>
                    email
                </span>
                <p className=''>{email}</p>
            </div>
            <div className=' w-[calc(30%-70px)] min-w-[150px] flex flex-row items-center'>
                <span className='material-icons-sharp mr-3 text-gray-500'>
                    home
                </span>
                <div className='flex flex-col'>
                    <p>{address.street} {address.number},</p>
                    <p>{address.pc} {address.city}</p>
                </div>
            </div>
            <div className=" w-[20px] flex items-center justify-center">
                <span className='material-icons-sharp'>
                    more_vert
                </span>
            </div>
        </TableRow>
    );
}

function FormatByClientType(ClientTypePrivate, name, company) {
    if (ClientTypePrivate) {
        return (
            <div className='w-[20%] min-w-[100px]'>
                <p className=''>{name}</p>
            </div>
        );
    } else {
        return (
            <div className='w-[20%] min-w-[100px] flex-wrap '>
                <p className='font-medium'>{company}L</p>
                <p className=' text-gray-500'>{name}</p>
            </div>
        );
    }
}
