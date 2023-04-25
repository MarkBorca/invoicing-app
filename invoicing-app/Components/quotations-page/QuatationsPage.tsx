import 'material-icons/iconfont/material-icons.css'

import FilterInput from '../common-components/FilterInput'
import MediumButton from '../common-components/MediumButton'
import TableRow from '../common-components/simple-table/TableRow'
import TableHeader from '../common-components/simple-table/TableHeader'
import Table from '../common-components/simple-table/Table'

import InvoiceIcon from '/public/icons/invoice-icon.svg'

export default function QuotationsPage() {
    return (
        <div className="bg-white w-5/6 h-[calc(100vh-50px)] mx-auto mt-6">

            <div className="bg-blue w-[calc(100%-20px)] h-80 mt-10 mx-auto ">

                <div className="bg-greens w-full min-h-10 mb-12 justify-between flex flex-row items-center">
                    <button className='bg-green-400 z-0 px-8 py-2 rounded-sm border-[1px] border-black drop-shadow-md shadow-black'>
                        Create new quotation
                    </button>

                    <FilterInput />
                </div>

                <Table>
                    <TableHeader>
                        <div className="bg-blue w-[70px]"></div>
                        <p className="bg-blue w-[15%] min-w-[100px] ">Quotation</p>
                        <p className="bg-blue w-[40%] min-w-[150px] ">Client</p>
                        <p className="bg-blue w-[15%] min-w-[100px] ">Date</p>
                        <p className="bg-blue w-[calc(30%-70px)] min-w-[150px] text-right">Price</p>
                    </TableHeader>

                    <TableRow>
                        <div className="bg-blue w-[70px]">
                            <InvoiceIcon className={`w-8 h-8 fill-green-600 mx-auto`} />
                        </div>
                        <p className="bg-blue w-[15%] min-w-[100px] ">d_01</p>
                        <p className="bg-blue w-[40%] min-w-[150px] ">Mark Borca</p>
                        <p className="bg-blue w-[15%] min-w-[100px] ">10 apr</p>
                        <p className="bg-blue w-[calc(30%-70px)] min-w-[150px] text-right">20.180,99 $</p>
                    </TableRow>
                </Table>

            </div>
        </div>
    )
}