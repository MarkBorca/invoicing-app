import LogoIcon from '/public/icons/files-icon.svg'

import NavWidget from './navWidget'
import NavSearchBar from './navSearchBar'


export default function Nav( {navState, setNavState, activePage} ) {
    return (
        <nav>
                <div
                    className={`bg-white w-20 h-full overflow-hidden fixed top-0 left-0 ease-in-out duration-300 shadow-md shadow-slate-300 ${navState ? 'w-80' : 'w-20'}`}
                    onMouseEnter={() => setNavState(true)}
                    onMouseLeave={() => setNavState(false)}
                >
                    {/** logo **/}
                    <div className={` overflow-hidden ease-in-out duration-300 flex justify-around mb-6 ${navState ? 'w-60' : 'w-12'}  mx-auto mt-3`}>
                        <div className='flex flex-row'>
                            <div className='w-12 h-12'>
                                <LogoIcon className=' fill-blue-400 w-11 h-11  block' />
                            </div>
                            <div className={`ease-in-out duration-300 ${navState ? 'w-32' : 'w-0'} `}>
                                <h1 className={`text-center font-semibold text-3xl mt-1 `}>Invoicer</h1>
                            </div>
                        </div>
                    </div>

                    <NavSearchBar  navState={navState} />

                    <hr className={`w-12 my-6 mx-auto ${navState ? 'w-60' : 'w-12'} `} />
                    <NavWidget navState={navState} activePage={activePage} icon={'grid_view'} text={'Dashboard'} link={'/'} />

                    <hr className={`w-12 my-2 mx-auto ${navState ? 'w-60' : 'w-12'} `} />
                    <NavWidget navState={navState} activePage={activePage} icon={'request_quote'} text={'Invoices'} link={'/invoices'} />
                    <NavWidget navState={navState} activePage={activePage} icon={'description'} text={'Quotations'} link={'/quotations'} />
                    
                    <hr className={`w-12 my-2 mx-auto ${navState ? 'w-60' : 'w-12'} `} />
                    <NavWidget navState={navState} activePage={activePage} icon={'people'} text={'Clients'} link={'/clients'} />
                    <NavWidget navState={navState} activePage={activePage} icon={'email'} text={'Emails'} link={'/emails'} />
                    
                </div>

                <div className={`ease-in-out duration-300 ${navState ? 'w-80' : 'w-20'}`}></div>

            </nav>
    )
}