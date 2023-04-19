import Link from "next/link";

import InvoiceIcon from "/public/icons/invoice-icon.svg";
import ClientsIcon from "/public/icons/clients-icon.svg";
import EmailIcon from "/public/icons/email-icon.svg";
import HomeIcon from "/public/icons/home-icon.svg";

export default function LargeNavWidget({ name }) {
    if (name === "Invoices") {
        return (
            <Link href="/invoices">
                <div className="bg-blue-400 w-18 hover:bg-blue-300 h-16 my-4 mx-auto rounded-md flex-col p-1 cursor-pointer shadow-md shadow-[#0000006c]">
                    <InvoiceIcon className="w-9 h-9 m-auto" />
                    <h1 className=" text-center">{name}</h1>
                </div>
            </Link>
        );
    } else if (name == "Quotations") {
        return (
            <Link href="/quotations">
                <div className="bg-green-400 hover:bg-green-300 w-18 h-16 my-4 mx-auto rounded-md flex-col p-1 cursor-pointer shadow-md shadow-[#0000006c]">
                    <InvoiceIcon className="w-9 h-9 m-auto" />
                    <h1 className=" text-center">{name}</h1>
                </div>
            </Link>
        );
    } else if (name == "Clients") {
        return (
            <Link href="/clients">
                <div className="bg-yellow-400 hover:bg-yellow-300 w-18 h-16 my-4 mx-auto rounded-md flex-col p-1 cursor-pointer shadow-md shadow-[#0000006c]">
                    <ClientsIcon className=" w-9 h-9 m-auto" />
                    <h1 className=" text-center">{name}</h1>
                </div>
            </Link>
        );
    } else if (name == "Emails") {
        return (
            <Link href="/emails">
                <div className="bg-purple-400 hover:bg-purple-300 w-18 h-16 my-4 mx-auto rounded-md flex-col p-1 cursor-pointer shadow-md shadow-[#0000006c]">
                    <EmailIcon className=" w-9 h-9 m-auto" />
                    <h1 className=" text-center">{name}</h1>
                </div>
            </Link>
        );
    } else if (name == "Home") {
        return (
            <Link href="/">
                <div className="bg-gray-100 hover:bg-gray-200 w-18 h-16 my-4 mx-auto rounded-md flex-col p-1 cursor-pointer shadow-md shadow-[#0000006c]">
                    <HomeIcon className=" w-9 h-9 m-auto" />
                    <h1 className=" text-center">{name}</h1>
                </div>
            </Link>
        );
    }
}
