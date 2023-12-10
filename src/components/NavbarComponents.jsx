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
import LoginModal from "./LoginModalComponent";
import axios from "axios";



function NavList() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium pl-2"
            >
                <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white" id="liHome">
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
                <Link to='' className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                    About Us
                </Link>
            </Typography>
            <button className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-4 py-1 rounded-md mr-32 duration-300" id="startBtn" onClick={setLoginModalOpen}>
                Sign In
            </button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);
    const [scrolled, setIsScrolled] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize); return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    };

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <navbar
                className={`fixed z-50 w-full mx-auto px-4 py-4 rounded-none border-none shadow-none transition-all ${scrolled ? 'bg-gray-900' : 'bg-transparent'
                    }`}
                id="lpNavbar"
            >
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
                        onClick={handleToggleNav}
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



export function AvatarDefault() {
    return <Avatar src="/assets/profile-circle.png" alt="avatar" />;
}





// https://docs.material-tailwind.com/img/face-2.jpg

export function DashboardNavbar2() {
    const [openNav, setOpenNav] = React.useState(false);
    const [userData, setUserData] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);



    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);


    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);



    React.useEffect(() => {
        // Buat fungsi untuk mendapatkan informasi pengguna
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost/Database/Login.php');
                // Respon dari backend harus berisi informasi pengguna
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Panggil fungsi untuk mengambil informasi pengguna
        fetchUserData();
    }, []); // Pastikan hanya dijalankan sekali saat komponen dimuat


    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const defaultProperties = {
        dark: {
            circle: {
                r: 9,
            },
            mask: {
                cx: '50%',
                cy: '23%',
            },
            svg: {
                transform: 'rotate(40deg)',
            },
            lines: {
                opacity: 0,
            },
        },
        light: {
            circle: {
                r: 5,
            },
            mask: {
                cx: '100%',
                cy: '0%',
            },
            svg: {
                transform: 'rotate(90deg)',
            },
            lines: {
                opacity: 1,
            },

        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
    };

    return (
        <>

            <div className="col-span-3 w-full flex h-20" id="navbar2">
                <div className="pt-3">
                    <a href="#">
                        <img src="/assets/logo2.png" className="w-28 h-12 ml-32" alt="" id='logo' />
                    </a>
                </div>

                <div className="mx-auto pt-5" id="form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <div className="input mr-8">
                                <input
                                    type="search"
                                    id="search"
                                    className="block w-[250px] p-2 ps-10 text-sm text-white border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                                    placeholder="Search"
                                    required

                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-[1px] bottom-[0.8px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-8"
                                >
                                    Search
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
                <div className=" mr-32 pt-4" id="avatarBox">
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
                                <div className="px-4 py-3" id='dropdown'>
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
                                        <Link
                                            to='/cart'
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Your Order
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/home'
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                <div>
                </div>
            </div>


        </>
    );
}

export function CartNavbar() {
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


    const defaultProperties = {
        dark: {
            circle: {
                r: 9,
            },
            mask: {
                cx: '50%',
                cy: '23%',
            },
            svg: {
                transform: 'rotate(40deg)',
            },
            lines: {
                opacity: 0,
            },
        },
        light: {
            circle: {
                r: 5,
            },
            mask: {
                cx: '100%',
                cy: '0%',
            },
            svg: {
                transform: 'rotate(90deg)',
            },
            lines: {
                opacity: 1,
            },

        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
    };

    return (
        <>

            <div className="col-span-3 w-full flex h-20" id="navbar2">
                <div className="pt-3">
                    <a href="#">
                        <img src="/assets/logo2.png" className="w-28 h-12 ml-32" alt="" id='logo' />
                    </a>
                </div>

                <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ms-auto">
                    <li>
                        <Typography

                            variant="small"
                            color="blue-gray"
                            className="p-1 font-medium pl-2"
                        >
                            <Link to='/dashboard' className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white" id="liHome">
                                Home
                            </Link>
                        </Typography>
                    </li>
                    <li>

                        <Typography

                            variant="small"
                            color="blue-gray"
                            className="p-1 font-medium pl-2"
                        >
                            <Link href="#" className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                                Services
                            </Link>
                        </Typography>
                    </li>
                    <li>

                        <Typography

                            variant="small"
                            color="blue-gray"
                            className="p-1 font-medium pl-2"
                        >
                            <Link to={{}} className="flex items-center hover:text-blue-500 transition-colors duration-300 text-white">
                                About Us
                            </Link>
                        </Typography>
                    </li>
                </ul>

                {/* <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={25}
                    style={{ position: 'absolute', right: '200px', top: '30px' }}
                /> */}
                <div className="pt-4 ms-auto mr-32" id="avatarBox">
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
                                <div className="px-4 py-3" id='dropdown'>
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
                                        <Link
                                            to='/home'
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                <div>
                </div>
            </div>


        </>
    );
}

