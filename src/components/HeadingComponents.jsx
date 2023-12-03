import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './HeadingComponents.css';
import './ProfileCard.css';
import { useRef, useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { BtnPayment } from './BookingModal';


export function LandingPageHeading() {
    const inputStyle = {
        border: '1px solid #e5e7eb',
        padding: '8px',
        width: '100%',

    };


    const itemRef = useRef();

    const handleScroll = () => {
        const item = itemRef.current;

        if (item) {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight * 0.75) {
                // Tambahkan kelas 'active' ketika item terlihat
                item.classList.add('active');
            }
        }

    }

    useEffect(() => {
        // Tambahkan listener scroll saat komponen dimount
        window.addEventListener('scroll', handleScroll);
        // Hapus listener saat komponen dibongkar
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Efek ini akan hanya dijalankan sekali saat komponen dimount


    return (

        <>
            <div className="flex">
                <div className='heading-wrap'>
                    <h1 className="text-left font-semibold text-white mt-36 ms-36 sm:text-3xl md:text-5xl w-[520px]">Entertainment Right In Front of you. Book your tickets Now</h1>
                    <p className="text-left font-light text-gray-300 mt-7 ms-36" style={{ width: '500px' }}>Easy Booking, Guaranteed Entertainment.</p>
                    <button className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-4 py-1 rounded-md duration-300 mt-5 ms-36">
                        <Link to='/dashboard' className='font-normal'>Get Started</Link>
                    </button>
                </div>
            </div>
            <section>
                <div className="items" ref={itemRef} style={{ marginTop: '500px', backgroundColor: 'rgb(14, 17, 22)' }}>
                    <div className="text-white text-4xl font-semibold mt-12 pt-16 flex w-full" id='aboutSec'>
                        <div className='ms-[140px]' id='textAbout'>About Us</div>
                    </div>
                    <HorizontalCard />
                    <div className="text-white text-4xl font-semibold mt-12 pt-16 flex w-full mb-[-110px]">
                        <div className='ms-[140px]'>Our Team</div>
                    </div>
                    <ProfileCardComponent />
                </div>
            </section>

        </>
    )
}


// template
export function ProfileCard({ name, position, img }) {
    return (
        <Card className="w-[280px] h-[380px] mx-auto" id='card-wrap'>
            <CardHeader floated={false} className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}></div>
                <img src={img} alt="profile-picture" className="w-full h-full object-cover" id="img-profile" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {position}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}


// isi card
export function ProfileCardComponent() {

    const [content, setContent] = useState([
        {
            id: 1,
            name: "Rayhan Ayman",
            position: "Front End Developer",
            img: "/assets/ayman.jpg",
        },
        {
            id: 2,
            name: "Hud Satya Ginting",
            position: "Backend Developer",
            img: "https://docs.material-tailwind.com/img/team-2.jpg",
        },
        {
            id: 3,
            name: "Rifandito Daniswara",
            position: "Project Manager",
            img: "https://docs.material-tailwind.com/img/team-3.jpg",
        },
        {
            id: 4,
            name: "Danesta Restu K",
            position: "UI/UX Designer",
            img: "/assets/danes.jpg",
        },
    ]);

    return (
        <>
            <div>
                <div className="grid grid-cols-4 gap-2 md:p-[140px] mx-auto" id="cardDisplay">
                    {content.map((cardContent) => (
                        <ProfileCard
                            key={cardContent.id}
                            img={cardContent.img}
                            name={cardContent.name}
                            position={cardContent.position}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};


export function HorizontalCard() {
    return (
        <Card className="w-[80%] flex-row mx-auto mt-8 h-[400px]" id='cardHeading'>
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none border-r"
                id='cardHeader'
            >
                <img
                    src='/assets/logo2.png'
                    alt="card-image"
                    className="object-cover mx-auto mt-28 w-[360px]"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="white" className="mb-4 uppercase">
                    Question
                </Typography>
                <Typography variant="h4" color="blue" className="mb-2">
                    What's Versatile?
                </Typography>
                <Typography color="white" className="mb-8 font-normal">
                    Versatile is platform for you to book your ticket for your entertainment. We're
                </Typography>
                <Typography variant="h4" color="blue" className="mb-2">
                    Why should i use Versatile?
                </Typography>
                <Typography color="white" className="mb-8 font-normal">
                    Versatile is the only platform that sels ticket for best experience.
                </Typography>
                <Typography variant="h4" color="blue" className="mb-2">
                    What does Versatile offers?
                </Typography>
                <Typography color="white" className="mb-8 font-normal">
                    We offers you information and access to purchase tickets at entertainment venues or recreational venues ranging from the very famous to places that you may not know about but are truly amazing.
                </Typography>
            </CardBody>
        </Card>
    );
}



export function DetailProductComponent() {
    const [quantity, setQuantity] = useState(3); // Inisialisasi state dengan nilai awal 3

    const handleIncrement = () => {
        // Logika penambahan nilai saat tombol increment diklik
        if (quantity < 5) {
            setQuantity((prevQuantity) => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        // Logika pengurangan nilai saat tombol decrement diklik
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    return (
        <>
            <figure className="relative h-96 w-[80%] mx-auto mt-12">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    alt="nature image"
                    src='https://media.istockphoto.com/id/1389768890/id/foto/seaworld-san-diego.jpg?s=1024x1024&w=is&k=20&c=qcUGB_p-zWWFZ79LthaiA-eN_mTasaLxm4fWsyNHIa8='
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {/* {name} */} Sea World
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Jakarta, Indonesia {/* {location} */}
                        </Typography>
                    </div>
                </figcaption>
            </figure>

            <div className="flex w-[80%] mx-auto mt-12">
                <div className="w-[50%] p-4">
                    {/* Konten Kolom 1 */}
                    <div className=" p-4">
                        <Typography variant="h4" color="white">
                            Description
                        </Typography>
                        <div className="w-[80%] text-start text-white mt-2">
                            {/* {description} */}Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum repudiandae temporibus. Velit architecto mollitia quaerat dignissimos dolor, fugiat ullam doloribus distinctio similique iusto.
                        </div>
                    </div>
                </div>
                <div className="w-[50%] p-4">
                    {/* Konten Kolom 2 */}
                    <div className="p-4">
                        <Card className=" w-[400px] ms-auto">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 pb-1 text-gray-700 border-b">
                                    Rp. 100.000 / Ticket {/* {harga} */}
                                </Typography>
                                <form action="">
                                    <div className="relative flex items-center max-w-[11rem]">
                                        <button
                                            type="button"
                                            id="decrement-button"
                                            data-input-counter-decrement="bedrooms-input"
                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            onClick={handleDecrement}
                                        >
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            id="bedrooms-input"
                                            data-input-counter
                                            data-input-counter-min="1"
                                            data-input-counter-max="5"
                                            aria-describedby="helper-text-explanation"
                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder=""
                                            value={quantity}
                                            required

                                        />
                                        <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                                            <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                            </svg>
                                            <span>Guest</span>
                                        </div>
                                        <button
                                            type="button"
                                            id="increment-button"
                                            data-input-counter-increment="bedrooms-input"
                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            onClick={handleIncrement}
                                        >
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>

                                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Please select the date.
                                    </p>
                                    <div className="relative w-[176px]">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        </div>
                                        <input
                                            type="date"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Select date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            pattern="\d{4}-\d{2}-\d{2}"
                                        />
                                    </div>
                                </form>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to='/transactionPage'>
                                    <BtnPayment />
                                </Link>

                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>


        </>
    );
}


export function TransactionHeading() {
    return (
        <>
            <figure className="relative grid grid-cols-1 md:grid-cols-2 gap-4 h-96 w-[80%] mx-auto mt-12 bg-white rounded-xl">
                {/* Kolom pertama */}
                <div className="flex">
                    <img
                        className="h-96 w-full rounded-xl object-cover object-center"
                        alt="nature image"
                        src='https://media.istockphoto.com/id/1389768890/id/foto/seaworld-san-diego.jpg?s=1024x1024&w=is&k=20&c=qcUGB_p-zWWFZ79LthaiA-eN_mTasaLxm4fWsyNHIa8='
                    />
                </div>

                {/* Kolom kedua */}
                <div className="flex w-full items-center"> {/* Menggunakan items-center untuk membuat ikon dan teks berada di tengah */}
                    <div className="mr-4" style={{ marginTop: '-250px' }}> {/* Margin kanan untuk memberikan jarak antara ikon dan teks */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-[20px] w-[20px] mr-2 mb-8 ml-2"
                        >
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clipRule="evenodd"
                            />
                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                        </svg>
                    </div>
                    <div style={{ marginTop: '-250px' }}>
                        <Typography variant="h5" color="black">
                            Total Price
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Rp. 300.000 {/* Ganti dengan logika kalkulasi total */}
                        </Typography>
                    </div>
                </div>
            </figure>

        </>
    )
}