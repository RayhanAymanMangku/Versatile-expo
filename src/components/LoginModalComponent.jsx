import React from 'react';
// import './components/LoginModal.css'
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginModal({ isOpen, onClose }) {
    const [showRegisterModal, setShowRegisterModal] = React.useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');

    const handleLogin = () => {
        if (!email) {
            alert("Isi email anda!");
        } else if (!pwd) {
            alert("Isi password anda!");
        } else {
            const url = "http://localhost/Database/Login.php";  // Sesuaikan dengan URL backend Anda

            let formData = new FormData();
            formData.append("email", email);
            formData.append("pwd", pwd);

            axios.post(url, formData)
                .then(response => {
                    alert(response.data);
                    // Pindah ke DashboardPage.jsx jika registrasi berhasil
                    window.location.href = "/src/pages/Dashboard/DashboardPage.jsx";
                })
                .catch(error => {
                    alert("Error: " + error.message);
                    console.error(error);
                });
        }
    }
    const handleRegisterClick = () => {
        onClose(); // Tutup modal login
        setShowRegisterModal(true); // Tampilkan modal registrasi
    };

    return (
        <>
            <Modal open={isOpen} onClose={onClose} className='modal'>
                {/* --global container -- */}
                <div className="flex items-center justify-center min-h-screen bg-slate-50">
                    {/* --card container--- */}
                    <div className="relative flex.flex-col m-6 space-y-10 bg-white shadow md:space-y-0 flex-row md:m-0" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
                        {/* --left side (contents) */}
                        <div className="p-6 md:p-20">
                            {/* ---top content--  */}
                            <h2 className="mb-5 text-4xl font-bold">Login</h2>
                            <p className="max-w-sm mb-12 font-light text-gray-600">
                                Login to your account to get a full access.
                            </p>
                            <form action="" method='POST'>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light" placeholder='enter your email address' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light mt-3" placeholder='enter your password' name="pwd" id="pwd" value={pwd} onChange={(e) => setPassword(e.target.value)} />
                            </form>
                            {/* --Middle content-- */}
                            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                                <div className="font-thin text-cyan-700"><Link onClick={handleRegisterClick}>Dont have an account?</Link></div>
                                <button className='w-full md:w-auto flex justify-center items-center p-4  space-x-4 font-bold text-white rounded-md  px-6 bg-blue-600 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150' onClick={handleLogin} name="next" id="next">
                                    <Link to='/dashboard'>Next</Link>
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' className='w-7' viewBox='0 0 24 24' strokeWidth='1.5' stroke='%23ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none' /%3E%3Cline x1='5' y1='12' x2='19' y2='12' /%3E%3Cline x1='13' y1='18' x2='19' y2='12' /%3E%3Cline x1='13' y1='6' x2='19' y2='12' /%3E%3C/svg%3E"
                                        alt="Icon"
                                        className="w-7"
                                    />
                                </button>
                            </div>
                            {/* --border-- */}
                            <div className="mt-12 border-b border-b-gray-300"></div>
                            {/* border contents-- */}
                            <p className="py-6 text-sm font-thin text-center text-gray-600">
                                Or login with
                            </p>
                            {/* --Bottom button container-- */}
                            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                                <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                                    <img src="/assets/facebook.png" alt="" className='w-9' />
                                    <span className="font-thin text-gray-600">Facebook</span>
                                </button>
                                <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                                    <img src="/assets/google.png" alt="" className='w-9' />
                                    <span className="font-thin text-gray-600">Google</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* ---right side (image)  */}
                    {/* <img src="/assets/image.jpg" alt="" className='w-[430px] h-[663px] object-cover hidden md:block shadow' style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }} /> */}
                    <div className="relative bottom-[280px] right-[60px] cursor-pointer border rounded-full border-gray-600" onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 hover:scale-110 transition duration-150"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="rgb(117 117 117)"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </div>
                </div>
            </Modal>

            {/* Tampilkan modal registrasi jika showRegisterModal bernilai true */}
            {showRegisterModal && <RegistModal isOpen={true} onClose={() => setShowRegisterModal(false)} />}
        </>

    );
}



export function RegistModal({ isOpen, onClose }) {
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    // Untuk ngambil data registrasi yang dilakukan oleh user
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pwd, setPassword] = useState('');

    const buttonNext = () => {
        if (!email) {
            alert("Email wajib di isi!");
        } else if (!username) {
            alert("Username wajib di isi!");
        } else if (!pwd) {
            alert("Password wajib di isi!");
        } else {
            const url = "http://localhost/Database/Register.php";

            let fData = new FormData();
            fData.append("email", email);
            fData.append("username", username);
            fData.append("pwd", pwd);

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => {
                    alert("Error: " + error.message);
                    console.error(error); // Log error ke konsol
                });
        }
    };


    const handleLoginClick = () => {
        onClose(); // Tutup modal registrasi
        setShowLoginModal(true); // Tampilkan modal login
    };

    const handleRegistrationSuccess = () => {
        // Logika setelah registrasi berhasil
        console.log("Registration successful!");
        handleLoginClick();
    };
    return (
        <>
            <Modal open={isOpen} onClose={onClose} className='modal'>
                {/* --global container -- */}
                <div className="flex items-center justify-center min-h-screen bg-slate-50">
                    {/* --card container--- */}
                    <div className="relative flex.flex-col m-6 space-y-10 bg-white shadow md:space-y-0 flex-row md:m-0" style={{ borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px', borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }}>
                        <form method='post' action='/Database/Register.php'>
                            {/* --left side (contents) */}
                            <div className="p-6 md:p-20">
                                {/* ---top content--  */}
                                <h2 className="mb-5 text-4xl font-bold">Register</h2>
                                <p className="max-w-sm mb-12 font-light text-gray-600">
                                    Register your account to get full access.
                                </p>
                                <input type="username" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light" placeholder='enter your username' name="username" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light" placeholder='enter your email address' name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light mt-3" placeholder='enter your password' name="pwd" id="pwd" required value={pwd} onChange={(e) => setPassword(e.target.value)} />
                                {/* --Middle content-- */}
                                <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                                    <button className='w-full md:w-auto flex justify-center items-center p-4  space-x-4 font-bold text-white rounded-md  px-6 bg-blue-600 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150' onClick={buttonNext} name="next" id="next">
                                        <Link>Next</Link>
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' className='w-7' viewBox='0 0 24 24' strokeWidth='1.5' stroke='%23ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none' /%3E%3Cline x1='5' y1='12' x2='19' y2='12' /%3E%3Cline x1='13' y1='18' x2='19' y2='12' /%3E%3Cline x1='13' y1='6' x2='19' y2='12' /%3E%3C/svg%3E"
                                            alt="Icon"
                                            className="w-7"
                                        />
                                    </button>
                                </div>
                                {/* --border-- */}
                                <div className="mt-12 border-b border-b-gray-300"></div>
                                {/* border contents-- */}
                                <p className="py-6 text-sm font-thin text-center text-gray-600">
                                    Or register with
                                </p>
                                {/* --Bottom button container-- */}
                                <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                                    <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                                        <img src="/assets/facebook.png" alt="" className='w-9' />
                                        <span className="font-thin text-gray-600">Facebook</span>
                                    </button>
                                    <button className='flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                                        <img src="/assets/google.png" alt="" className='w-9' />
                                        <span className="font-thin text-gray-600">Google</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* ---right side (image)  */}
                    {/* <img src="/assets/image.jpg" alt="" className='w-[430px] h-[663px] object-cover hidden md:block shadow' style={{ borderTopRightRadius: '16px', borderBottomRightRadius: '16px' }} /> */}
                    <div className="relative bottom-[280px] right-[60px] cursor-pointer border rounded-full border-gray-600" onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 hover:scale-110 transition duration-150"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="rgb(117 117 117)"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </Modal>
            {/* Tampilkan modal login jika showLoginModal bernilai true */}
            {showLoginModal && <LoginModal isOpen={true} onClose={() => setShowLoginModal(false)} />}
        </>
    );
}