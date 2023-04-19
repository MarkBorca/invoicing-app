import Nav from '@/Components/nav/Nav'
import InvoicesPage from '@/Components/invoices-page/InvoicesPage'

export default function Invoices(){
    return (
        <div className='relative flex flex-col min-h-screen h-screen bg-white'>
            <Nav page='Invoicing' />
            <InvoicesPage />
        </div>
    )
}