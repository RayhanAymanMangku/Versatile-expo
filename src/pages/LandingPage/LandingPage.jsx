import React, { useEffect, useState } from 'react'
import { NavbarSimple } from '../../components/NavbarComponents'
import { LandingPageHeading } from '../../components/HeadingComponents'
import '../../pages/LandingPage/LandingPage.css'

const backgrounds = [
    "url(/assets/bg3.jpg)",
    "url(/assets/2.jpg)",
    "url(/assets/3.jpg)",
]
const LandingPage = () => {
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(changeBackground, 5000);

        // Membersihkan interval saat komponen dibongkar
        return () => clearInterval(intervalId);
    }, [currentBackgroundIndex]); // Memastikan useEffect dipanggil saat currentBackgroundIndex berubah

    const changeBackground = () => {
        // Ganti latar belakang dengan gambar berikutnya
        setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    const backgroundStyle = {
        backgroundImage: backgrounds[currentBackgroundIndex],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 1s ease-in-out',
        height: '100vh', // Sesuaikan dengan kebutuhan

    };



    return (
        <>
            <div className='lp' style={backgroundStyle}>
                <NavbarSimple />
                <LandingPageHeading />
            </div>
        </>
    )
}

export default LandingPage


// import React, { useEffect, useState } from 'react';
// import { NavbarSimple } from '../../components/NavbarComponents';
// import { LandingPageHeading } from '../../components/HeadingComponents';
// import '../../pages/LandingPage/LandingPage.css';

// const backgrounds = [
//     "url(/assets/bg3.jpg)",
//     "url(/assets/2.jpg)",
//     "url(/assets/3.jpg)",
// ];

// const LandingPage = () => {
//     const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === 'ArrowUp') {
//                 // Ganti latar belakang dengan gambar sebelumnya
//                 setCurrentBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
//             } else if (event.key === 'ArrowDown') {
//                 // Ganti latar belakang dengan gambar berikutnya
//                 setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//             }
//         };

//         // Tambahkan event listener saat komponen dimount
//         window.addEventListener('keydown', handleKeyDown);

//         // Membersihkan event listener saat komponen dibongkar
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [currentBackgroundIndex]); // Memastikan useEffect dipanggil saat currentBackgroundIndex berubah

//     const backgroundStyle = {
//         backgroundImage: backgrounds[currentBackgroundIndex],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         transition: 'background 1s ease-in-out',
//         height: '100vh',
//     };

//     return (
//         <>
//             <div className='lp' style={backgroundStyle}>
//                 <NavbarSimple />
//                 <LandingPageHeading />
//             </div>
//         </>
//     );
// };

// export default LandingPage;

