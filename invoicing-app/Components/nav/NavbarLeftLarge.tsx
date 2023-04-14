import LargeNavWidget from './large-nav-components/widget'

export default function NavbarLeftLarge({ navState }) {
    return (
            <div className={` bg-red-400 w-28 h-screen absolute top-0 left-0 z-20 ${navState ? "block" : "hidden"}`}>
                <div className=" w-5/6 h-[385px] mt-16 mx-auto">
                    <LargeNavWidget name='Home'/>
                    <LargeNavWidget name='Invoices'/>
                    <LargeNavWidget name='Quotations'/>
                    <LargeNavWidget name='Clients'/>
                    <LargeNavWidget name='Emails'/>
                </div>
            </div>
        
    );
}
