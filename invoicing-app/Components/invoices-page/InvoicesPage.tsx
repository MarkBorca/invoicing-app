import 'material-icons/iconfont/material-icons.css'

import FilterInput from '../common-components/FilterInput'
import MediumButton from '../common-components/MediumButton'
import TableRow from '../common-components/TableRow'

export default function InvoicesPage() {
    return (
        <div className="bg-white w-5/6 h-[calc(100vh-50px)] mx-auto mt-6">

            <div className="bg-blue w-[calc(100%-20px)] h-80 mt-10 mx-auto ">

                <div className="bg-greens w-full min-h-10 mb-12 justify-between flex flex-row items-center">
                    <button className='bg-blue-400 z-0 px-8 py-2 rounded-sm border-[1px] border-black drop-shadow-md shadow-black'>
                        Create new invoice
                    </button>
                    
                    <FilterInput />
                </div>

                <div className="bg-green w-full min-h-full flex flex-col ">
                    <div className="bg-green w-full h-10 border-gray-400 border-b-[1px] mb-2 flex flex-row place-items-center">
                        <div className="bg-blue w-[70px]"></div>
                        <p className="bg-blue w-[15%] min-w-[100px] ">Invoice</p>
                        <p className="bg-blue w-[40%] min-w-[150px] ">Client</p>
                        <p className="bg-blue w-[15%] min-w-[100px] ">Date</p>
                        <p className="bg-blue w-[calc(30%-70px)] min-w-[150px] text-right">Price</p>
                    </div>

                    <TableRow id='f_01' clientName='Mark Borca' date='10 apr' price='20.180,99 $' color='blue' />

                </div>

            </div>
        </div>
    )
}