import React from "react";
import {
    Collapse,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import '../components/Navbar.css'

import { useState } from "react";
import { Link } from "react-router-dom";




function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link href="#" className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    Pricing
                </Link>
            </Typography>
            {/* <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">

                </a>
            </Typography> */}
            {/* <Button variant="filled" size="sm" color="lime" className="text-gray-900">
                <Link>Login</Link>
            </Button> */}
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-1 rounded-md mr-32 duration-300" id="startBtn">
                Sign In
            </button>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <navbar className="max-w-full mx-auto px-4 w-full py-4 rounded-none border-none shadow-none" style={{ backgroundColor: 'transparent' }}>
                <div className="flex items-center justify-between text-gray-90">
                    <div className="logo">
                        <Link to={{}}>
                            <img src="/assets/logo2.png" className="w-28 h-12 ms-32" alt="" />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="mr-14 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </navbar>
        </>
    );
}

export function DashboardNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <div className="w-full h-20 bg-blue-gray-50 border-blue-gray-200 border-b-2">
                <h4 className="text-center pt-6" style={{ color: '#0788B2' }}>Hello, Ayman</h4>
            </div>
            <div className="w-full h-24 bg-white border-blue-gray-200 border-b-2">
                <a href="#">
                    <div className="pt-5">
                        <img src="/assets/logo.png" className="w-28 h-12 ms-32" alt="" />
                    </div>
                </a>
                <div className="flex w-52 mx-auto" style={{ marginTop: '-40px' }}>
                    {/* <Input
                        type="search"
                        color="lightBlue"
                        className="pr-20 rounded-xl border hover:border-blue-500 transition-colors duration-300"

                    // containerProps={{
                    //     className: "min-w-[288px]",
                    // }}
                    /> */}
                    <input type="text" placeholder="Find a Ticket" className=" pr-14 rounded-xl border hover:border-blue-500 transition-colors duration-300 text-center" />
                    <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-1 ml-2 rounded-md duration-300">
                        Search
                    </button>

                </div>
            </div>
        </>
    );
}



export function AvatarDefault() {
    return <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />;
}

export function DashboardNavbar2() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };


    return (
        <>
            <div className="w-full h-20 bg-blue-gray-50 border-blue-gray-200 border-b-2">
                <h4 className="text-center pt-6" style={{ color: '#0788B2' }}>Hello, User dari session</h4>
            </div>
            <div className="col-span-3 w-full flex h-20 border-b-2">
                <div className="pt-3">
                    <a href="#">
                        <img src="/assets/logo.png" className="w-28 h-12 ms-32" alt="" />
                    </a>
                </div>
                <div className="mx-auto pt-6">
                    <input type="text" className=" pr-14 rounded-xl border hover:border-blue-500 transition-colors duration-300 text-start h-8" />
                    <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-1 ml-2 duration-300 rounded-xl">
                        Search
                    </button>
                </div>
                <div className="mr-36 pt-5">
                    <div className="z-50 relative">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen}
                            onClick={handleToggleDropdown}
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom"
                        >
                            <span className="sr-only">Open user menu</span>
                            {/* <img className="w-10 h-10 rounded-full" src="/public/assets/profile.webp" alt="user photo" /> */}
                            <AvatarDefault />
                        </button>
                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[170px]"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Nama User</span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">Email User</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    {/* <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </a>
                                    </li> */}
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Order
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                <div>
                </div>
            </div>


        </> // perlu di buat 3 kolom di bagian bawah navbar
    );
}

