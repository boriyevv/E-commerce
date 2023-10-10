"use client";

import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext, useState } from "react";
import CommonModal from "../CommonModal";

const isAdminView = false;
const isAuthUser = true;


const user = {
    role: "admin",
};


function NavItems({ isModalView = false }) {



    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`} id="nav-items">
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : " border border-gray-200"}`}>
                {
                    isAdminView ? adminNavOptions.map((item) => (
                        <li className="cursor-pointer block  py-2 pl-3 pr-4 text-gray-900 rounded md:p-0" key={item.id}>
                            {item.label}
                        </li>)) : navOptions.map((item) => (
                            <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0" key={item.id}>
                                {item.label}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}


export default function Navbar() {

    const { showNavModal, setShowNavModal } = useContext(GlobalContext)

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-300">
                <div className="max-w-screen-2xl flex flex-row items-center justify-between mx-auto py-3">
                    <div className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap mr-1 text-black">
                            Ecommerce
                        </span>
                    </div>
                    <div className="flex justify-between md:order-2 gap-2">
                        {!isAdminView && isAuthUser ? (
                            <Fragment>
                                <button className="mt-1.5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-wide">Account</button>
                                <button className="mt-1.5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-wide">Cart</button>

                            </Fragment>
                        ) : null}
                        {user?.role === "admin" ? (
                            isAdminView ? (
                                <button className="mt-1.5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-wide">Client View</button>
                            ) : (
                                <button className="mt-1.5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-wide">Admin View</button>
                            )
                        ) : null}

                        {isAuthUser ? <button className="mt-1.5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-wide">Log Out</button> : <button className="mt-1.5 inline-block bg-black text-white px-4 py-4 text-xs font-medium uppercase tracking-wide text-wide">Log In</button>}

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setShowNavModal(true)}
                        >
                            <span className="sr-only">
                                Open Main Menu
                            </span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/1999/svg"
                            >
                                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" />

                            </svg>

                        </button>

                    </div>
                    <NavItems />
                </div>
            </nav>
            <CommonModal
                showModalTitle={false}
                mainContent={<NavItems isModalView={true} />}
                show={showNavModal}
                setShow={setShowNavModal} />
        </>
    );
}
