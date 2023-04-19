import Nav from '@/Components/nav/Nav'
import QuotationsPage from '@/Components/quotations-page/QuatationsPage'

export default function Quotations(){
    return (
        <div className='relative flex flex-col min-h-screen h-screen bg-white'>
            <Nav page='Quatations' />
            <QuotationsPage />
        </div>
    )
}