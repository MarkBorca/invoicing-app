import "material-icons/iconfont/material-icons.css";

import Nav from "@/Components/nav/nav";
import Main from "@/Components/main/main";

import Tabulation from "@/Components/common-components/tabulation/tabulation";
import Filter from "@/Components/common-components/filter-component/filter";
import Table from "@/Components/common-components/simple-table/Table";
import TableRowClient from "@/Components/common-components/simple-table/TableRowClient";

import { useState } from "react";

export default function Clients() {
    let [navState, setNavState] = useState(false);
    let [pageNavBar, setPageNavBar] = useState(false);
    let [selectedFilterTag, setSelectedFilterTag] = useState("all");

    return (
        <div className='relative flex flex-row min-h-screen'>
            <Nav
                navState={navState}
                setNavState={setNavState}
                activePage='Clients'
            />

            <Main
                navState={navState}
                pageNavBar={pageNavBar}
                setPageNavBar={setPageNavBar}
                page='Clients'
                btnValue="New client"
            >
                <div className='w-full flex flex-col '>
                    <div className='  w-full h-10 flex flex-row items-end justify-between'>
                        <Filter
                            filterTags={["all", "private clients", "companies"]}
                            selectedFilterTag={selectedFilterTag}
                            setSelectedFilterTag={setSelectedFilterTag}
                        />
                        <Tabulation />
                    </div>

                    <div className=' mt-10 w-full '>
                        <Table>
                            <TableRowClient
                                ClientTypePrivate={true}
                                name={{ name: "Mark Borca" }}
                                phone={"0493921814"}
                                email={"borcamark45@hotmail.com"}
                                address={{
                                    street: "Rue de l'Infante",
                                    number: "250",
                                    cp: "1410",
                                    city: "Waterloo",
                                }}
                            />
                            <TableRowClient
                                ClientTypePrivate={false}
                                name={{
                                    name: "Mark Borca",
                                    company: "Company SRL",
                                }}
                                phone={"0493921814"}
                                email={"borcamark45@hotmail.com"}
                                address={{
                                    street: "Rue de l'Infante",
                                    number: "250",
                                    cp: "1410",
                                    city: "Waterloo",
                                }}
                            />
                            <TableRowClient
                                ClientTypePrivate={true}
                                name={{ name: "Austin Lemon" }}
                                phone={"0474824812"}
                                email={"borcamark45@hotmail.com"}
                                address={{
                                    street: "Rue de l'Infante",
                                    number: "250",
                                    cp: "1410",
                                    city: "Waterloo",
                                }}
                            />
                        </Table>
                    </div>
                </div>
            </Main>
        </div>
    );
}
