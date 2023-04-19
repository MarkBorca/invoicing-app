"use client"

import WidgetMd from './WidgetMedium'
import WidgetSm from './WdigetSmall'

export default function SuggestionBox({ searchFocus, searchState, setSearchFocus}) {

    const invoice = {
        id: '124',
        clientName: 'Mark Borca',
        date: '12/04/2023',
        price: 123456
    }

    const client = {
        clientName: 'Mark Borca'
    }


    return (
        <>
            <div className={`z-50 absolute top-11 left-1/2 translate-x-[-50%] w-2/5 min-h-[50px] max-h-[350px] p-[10px] bg-white border-black border-[1px] rounded-[4px] overflow-y-auto overflow-x-hidden ${searchFocus ? 'block' : 'hidden'}`}>
                {/** medium widgets      **/}
                <div className={searchState ? 'hidden' : 'block'} >
                    <WidgetMd name={'Client'} />
                    <WidgetMd name={'Invoice'} />
                    <WidgetMd name={'Quotation'} />
                    <WidgetMd name={'Email'} />
                </div>

                {/** small widgets **/}
                <div>
                    <WidgetSm name={'Client'} data={client} />
                    <WidgetSm name={'Invoice'} data={invoice} />
                    <WidgetSm name={'Invoice'} data={invoice} />
                    <WidgetSm name={'Quotation'} data={invoice} />
                </div>
            </div>

            <div className={`bg-black absolute z-40 w-screen h-screen bg-opacity-70 ${searchFocus ? 'block' : 'hidden'}`} onClick={ () => setSearchFocus(false) }></div>
        </>
    )
}