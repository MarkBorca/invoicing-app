import "material-icons/iconfont/material-icons.css";

import Nav from "@/Components/nav/nav";
import Main from "@/Components/main/main";

import { useState } from "react";

export default function Invoices() {
  let [navState, setNavState] = useState(false);

  return (
    <div className="relative flex flex-row min-h-screen">
      <Nav
        navState={navState}
        setNavState={setNavState}
        activePage="Invoices"
      />
      <Main navState={navState}></Main>
    </div>
  );
}
