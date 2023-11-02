

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom"
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = useLocation()

    return (
        <div className="flex justify-between -top-2 shadow-sm bg-white sticky md:px-20 px-3 border-b  py-5 items-center  z-[100] max-w-[1500px] m-auto">

            <img src="https://www.webiser.no/static/images/logo/logo-black.png" alt="logo " className=" w-[120px] md:w-[120px] " />
            <div className="flex lg:gap-x-16 gap-x-50">
                <ul className={` pl-20 lg:pl-0 duration-500 lg:flex absolute lg:static items-start lg:justify-center mt-[50px] lg:mt-auto ${open ? 'ml-[0px]  opacity-[100%]' : 'ml-[-280px] opacity-0 '} w-full left-0 gap-10  lg:gap-x-9 bg-white z-[10] py-5 lg:py-0 pl-11  lg:mt-auto lg:flex-row lg:w-auto lg:opacity-100`}>
                    <Link href={"/"}><li className={`  p-3  lg:p-2 lg:my-auto lg:py-2 w-[200px] lg:w-auto rounded  cursor-pointer   hover:bg-gray-100 lg:bg-white font-normal text-[#183b56]  text-[20px]`}>Tjenester</li></Link>
                    <Link href={"/products"}><li className={` p-3  lg:p-2 lg:my-auto lg:py-2 w-[200px] lg:w-auto rounded  cursor-pointer  hover:bg-gray-100 lg:bg-white  font-normal text-[#183b56] text-[20px] `}>Prosjekter</li></Link>
                    <Link href={"/categorey/women"}><li className={` p-3  lg:p-2 lg:my-auto lg:py-2 w-[200px] lg:w-auto rounded  cursor-pointer  hover:bg-gray-100 lg:bg-white font-normal text-[rgb(24,59,86)] text-[20px] `}>Prosjekter</li></Link>
                    <Link href={"/contact"}><li className={` p-3  lg:p-2 lg:my-auto lg:py-2 w-[200px] lg:w-auto rounded  cursor-pointer  hover:bg-gray-100 lg:bg-white font-normal text-[#183b56] text-[20px] `}>Om Webiser</li></Link>
                </ul>
                <Link href={"/addtocart"} className="relative  bg-[#0088F9]  py-[6px] rounded flex justify-center lg:text-[21px] text-[15px] items-center lg:px-2 px-4 text-white">
                    Get started
                </Link>
            </div>
            <div className=" text-[30px] lg:hidden text-[#0088F9] order-[-1]">
                {open ? <X onClick={() => { setOpen(!open) }} className="text-[30px]" /> : <Menu onClick={() => { setOpen(!open) }} className="text-[30px]" />}
            </div>
        </div>
    );
};

export default Header;