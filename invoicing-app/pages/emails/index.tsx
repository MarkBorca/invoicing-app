import "material-icons/iconfont/material-icons.css";

import Nav from "@/Components/nav/nav";
import Main from "@/Components/main/main";

import { useState } from "react";

export default function Emails() {
    let [navState, setNavState] = useState(false);
    let [pageNavBar, setPageNavBar] = useState(false);

    return (
        <div className='relative flex flex-row min-h-screen'>
            <Nav
                navState={navState}
                setNavState={setNavState}
                activePage='Emails'
            />

            <Main
                navState={navState}
                pageNavBar={pageNavBar}
                setPageNavBar={setPageNavBar}
                page='Emails'
                btnValue="New email"
            ></Main>
        </div>
    );
}
