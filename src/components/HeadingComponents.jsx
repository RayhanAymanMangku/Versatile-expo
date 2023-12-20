import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './HeadingComponents.css';
import './ProfileCard.css';
import { useRef, useEffect, useState } from 'react';
import { Spinner } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { BtnPayment } from './BookingModal';
import { CarouselCustomNavigation } from './AdvCarouselComponent';
import CardPayment from './CardPayment';

const fontFamily = {
    system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

export function LandingPageHeading() {

    return (

        <>
            <div className="box">
            </div>
            <div className="flex">
                <div className='heading-wrap mt-10'>
                    <h1 className="text-left font-semibold text-white mt-36 ms-36 sm:text-3xl md:text-5xl w-[520px]">Entertainment Right In Front of you. Book your tickets Now</h1>
                    <p className="text-left font-light text-gray-300 mt-7 ms-36 w-[500px]" style={fontFamily}>Easy Booking, Guaranteed Entertainment.</p>
                    <button className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-4 py-1 rounded-md duration-300 mt-5 ms-36">
                        {/* <Link to='#result' className='font-normal' style={fontFamily}>Get Started</Link> */}
                        <a href='#result' className='font-normal' style={fontFamily}>Get Started</a>

                    </button>
                </div>
            </div>
            <section>
                <div className="flex w-[80%]" id='box'>
                    <CarouselCustomNavigation />
                </div>
                <div className="items" style={{ marginTop: '700px', backgroundColor: 'rgb(14, 17, 22)' }}>
                    <div className="text-white text-4xl font-semibold mt-[-500px] pt-[400px] flex w-full" id='aboutSec'>
                        <div className='ms-[140px] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-white' id='textAbout'>About Us</div>
                    </div>
                    <HorizontalCard id='result' />
                    <div className="text-white text-4xl font-semibold mt-12 pt-16 flex w-full mb-[-110px]">
                        <div className='ms-[140px] bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-white' id='textServices'>Services</div>
                    </div>
                    <GallerySection2 />
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



export function HorizontalCard({ id }) {
    return (
        <Card className="cardHeading w-[80%] flex-row mx-auto mt-8 h-[400px]" id={id}>
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



export function DetailProductComponent({ title, desc, img, price }) {
    const [quantity, setQuantity] = useState(1); // Inisialisasi state dengan nilai awal 1
    const [selectedDate, setSelectedDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(price); // Harga awal sejumlah guest 1

    const handleUpdateTotalPrice = (newTotalPrice) => {
        setTotalPrice(newTotalPrice);
    }

    const handleIncrement = () => {
        if (quantity < 5) {
            setQuantity((prevQuantity) => prevQuantity + 1);
            updateTotalPrice(quantity + 1)
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            updateTotalPrice(quantity - 1)

        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const updateTotalPrice = (guestCount) => {
        const newTotalPrice = guestCount * price;
        handleUpdateTotalPrice(newTotalPrice);
    };

    return (
        <>
            <figure className="relative h-96 w-[80%] mx-auto mt-12">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    alt="nature image"
                    src={img}
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {title}
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            .
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
                            {desc}
                        </div>
                    </div>
                </div>
                <div className="w-[50%] p-4">
                    {/* Konten Kolom 2 */}
                    <div className="p-4">
                        <Card className=" w-[350px] ms-auto">
                            <CardBody className='p-8 ml-3'>
                                <div className="group inline-flex flex-wrap items-center gap-3">
                                    <span className="cursor-pointer rounded-full border border-gray-300 bg-gray-900/5 p-3 text-gray-600 transition-colors hover:border-gray-900/10  hover:!opacity-100 group-hover:opacity-70">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                                        </svg>
                                    </span>
                                </div>
                                <Typography variant="h5" className="mb-2 pb-1 text-gray-700 border-b">
                                    Rp. {price} / Guest
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
                                    <Typography variant="h5" className=" text-gray-700 mt-2">
                                        Total Price
                                    </Typography>
                                    <div className="w-[175px] h-[40px] border border-gray-300 bg-gray-50 rounded-lg mt-1 text-center pt-2 text-gray-900" id='colTotalPrice'>
                                        Rp. {totalPrice.toLocaleString()}
                                    </div>
                                </form>
                            </CardBody>
                            <CardFooter className="pt-0  ml-5">
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
                <div className="flex w-full items-center" style={{ marginTop: '-200px' }}> {/* Menggunakan items-center untuk membuat ikon dan teks berada di tengah */}
                    <div className="flex flex-row w-[200px]">
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
                        <div className="flex flex-col">
                            <Typography variant="h5" color="black">
                                Total Price
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                Rp.
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M107,154.006845 C107,153.45078 107.449949,153 108.006845,153 L119.993155,153 C120.54922,153 121,153.449949 121,154.006845 L121,165.993155 C121,166.54922 120.550051,167 119.993155,167 L108.006845,167 C107.45078,167 107,166.550051 107,165.993155 L107,154.006845 Z M108,157 L120,157 L120,166 L108,166 L108,157 Z M116.5,163.5 L116.5,159.5 L115.757485,159.5 L114.5,160.765367 L114.98503,161.275112 L115.649701,160.597451 L115.649701,163.5 L116.5,163.5 Z M112.5,163.5 C113.412548,163.5 114,163.029753 114,162.362119 C114,161.781567 113.498099,161.473875 113.110266,161.433237 C113.532319,161.357765 113.942966,161.038462 113.942966,160.550798 C113.942966,159.906386 113.395437,159.5 112.505703,159.5 C111.838403,159.5 111.359316,159.761248 111.051331,160.115385 L111.456274,160.632075 C111.724335,160.370827 112.055133,160.231495 112.425856,160.231495 C112.819392,160.231495 113.13308,160.382438 113.13308,160.690131 C113.13308,160.974601 112.847909,161.102322 112.425856,161.102322 C112.28327,161.102322 112.020913,161.102322 111.952471,161.096517 L111.952471,161.839623 C112.009506,161.833817 112.26616,161.828012 112.425856,161.828012 C112.956274,161.828012 113.190114,161.967344 113.190114,162.275036 C113.190114,162.565312 112.93346,162.768505 112.471483,162.768505 C112.10076,162.768505 111.684411,162.605951 111.427757,162.327286 L111,162.87881 C111.279468,163.227141 111.804183,163.5 112.5,163.5 Z M110,152.5 C110,152.223858 110.214035,152 110.504684,152 L111.495316,152 C111.774045,152 112,152.231934 112,152.5 L112,153 L110,153 L110,152.5 Z M116,152.5 C116,152.223858 116.214035,152 116.504684,152 L117.495316,152 C117.774045,152 118,152.231934 118,152.5 L118,153 L116,153 L116,152.5 Z" transform="translate(-107 -152)"></path> </g></svg>
                        <div className="flex flex-col">
                            <Typography variant="h5" color="black">
                                Date
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                12/12/2021 {/* Ganti dengan logika kalkulasi total */}
                            </Typography>
                        </div>
                    </div>
                    <div className="box w-[200px] h-[200px] mt-[340px] ml-[-270px]">
                        <div className="flex flex-col">
                            <Typography variant="h5" color="black">
                                Payment Method
                            </Typography>
                            <div className="flex w-[200px] ">
                                <div className="flex flex-row gap-2 ">
                                    <div>
                                        <img src="/assets/visa.svg" alt="" className='w-[35px] h-[35px]' />
                                    </div>
                                    <div>
                                        <img src="/assets/mastercard.svg" alt="" className='w-[35px] h-[35px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>

            <div className="flex w-[80%] mx-auto rounded-xl mt-8">
                <CardPayment />
                <TermsCondition />
            </div>

        </>
    )
}


export function TermsCondition() {
    return (
        <>
            <div className="flex w-[50%] h-[750px] mt-[100px] ml-5 rounded-xl text-white">
                Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Website and Services, you agree to the terms of our Privacy Policy.
            </div>

        </>
    )
}


export function CustomSpinner() {

    return (
        <>
            <Spinner className="h-16 w-16 text-white" />
        </>
    )


}

export function CardCart() {
    return (
        <>
            <figure className="relative grid grid-cols-1 md:grid-cols-2 gap-4 h-96 w-[80%] bg-white rounded-xl mt-8">
                {/* Kolom pertama */}
                <div className="flex">
                    <img
                        className="h-96 w-full rounded-xl object-cover object-center"
                        alt="nature image"
                        src='https://media.istockphoto.com/id/1389768890/id/foto/seaworld-san-diego.jpg?s=1024x1024&w=is&k=20&c=qcUGB_p-zWWFZ79LthaiA-eN_mTasaLxm4fWsyNHIa8='
                    />
                </div>

                {/* Kolom kedua */}
                <div className="flex w-full items-center h-[100px]" style={{ marginTop: '30px' }}> {/* Menggunakan items-center untuk membuat ikon dan teks berada di tengah */}
                    <div className="flex flex-row w-[200px]">
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
                        <div className="flex flex-col">
                            <Typography variant="h5" color="black">
                                Total Price
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                Rp.
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M107,154.006845 C107,153.45078 107.449949,153 108.006845,153 L119.993155,153 C120.54922,153 121,153.449949 121,154.006845 L121,165.993155 C121,166.54922 120.550051,167 119.993155,167 L108.006845,167 C107.45078,167 107,166.550051 107,165.993155 L107,154.006845 Z M108,157 L120,157 L120,166 L108,166 L108,157 Z M116.5,163.5 L116.5,159.5 L115.757485,159.5 L114.5,160.765367 L114.98503,161.275112 L115.649701,160.597451 L115.649701,163.5 L116.5,163.5 Z M112.5,163.5 C113.412548,163.5 114,163.029753 114,162.362119 C114,161.781567 113.498099,161.473875 113.110266,161.433237 C113.532319,161.357765 113.942966,161.038462 113.942966,160.550798 C113.942966,159.906386 113.395437,159.5 112.505703,159.5 C111.838403,159.5 111.359316,159.761248 111.051331,160.115385 L111.456274,160.632075 C111.724335,160.370827 112.055133,160.231495 112.425856,160.231495 C112.819392,160.231495 113.13308,160.382438 113.13308,160.690131 C113.13308,160.974601 112.847909,161.102322 112.425856,161.102322 C112.28327,161.102322 112.020913,161.102322 111.952471,161.096517 L111.952471,161.839623 C112.009506,161.833817 112.26616,161.828012 112.425856,161.828012 C112.956274,161.828012 113.190114,161.967344 113.190114,162.275036 C113.190114,162.565312 112.93346,162.768505 112.471483,162.768505 C112.10076,162.768505 111.684411,162.605951 111.427757,162.327286 L111,162.87881 C111.279468,163.227141 111.804183,163.5 112.5,163.5 Z M110,152.5 C110,152.223858 110.214035,152 110.504684,152 L111.495316,152 C111.774045,152 112,152.231934 112,152.5 L112,153 L110,153 L110,152.5 Z M116,152.5 C116,152.223858 116.214035,152 116.504684,152 L117.495316,152 C117.774045,152 118,152.231934 118,152.5 L118,153 L116,153 L116,152.5 Z" transform="translate(-107 -152)"></path> </g></svg>
                        <div className="flex flex-col">
                            <Typography variant="h5" color="black">
                                Date
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                12/12/2021 {/* Ganti dengan logika kalkulasi total */}
                            </Typography>
                        </div>
                    </div>
                    <div className="box w-[200px] h-[200px] mt-[340px] ml-[-270px]">
                        <div className="flex flex-col">
                            <Typography variant='h5' color="black">
                                Guest
                            </Typography>
                            <Typography color="gray" className="mt-2 font-normal">
                                Rayhan Ayman {/* Ganti dengan logika value dari input di cardpayment */}
                            </Typography>

                        </div>
                        <div className="flex flex-col mt-8">
                            <Typography variant="h5" color="black">
                                Payment Method
                            </Typography>
                            <div className="flex w-[200px] ">
                                <div className="flex flex-row gap-2 ">
                                    <div>
                                        <img src="/assets/visa.svg" alt="" className='w-[35px] h-[35px]' />
                                    </div>
                                    <div>
                                        <img src="/assets/mastercard.svg" alt="" className='w-[35px] h-[35px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
        </>
    )
}

const GallerySection = () => {
    return (
        <div class="container ms-16 px-5 py-2 lg:px-32 lg:pt-24 mt-14">
            <div class="-m-1 flex flex-wrap md:-m-2">
                {/* <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center hover:opacity-75 transition-opacity duration-300"
                            src="https://i.pinimg.com/564x/46/1f/fd/461ffd85c528a1b49e8a3081a3b87dba.jpg" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center hover:opacity-75 transition-opacity duration-300"
                            src="https://i.pinimg.com/564x/d1/a8/bf/d1a8bfecfe958b323c274d1968b006ff.jpg" />
                    </div>
                    <div class="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center hover:opacity-75 transition-opacity duration-300"
                            src="https://i.pinimg.com/originals/45/05/46/45054604b7873b602df111c3af7a53ed.jpg" />
                    </div>
                </div> */}
                <div class="flex w-1/2 flex-wrap mt-1">
                    <p className='ml-12 text-white text-lg'>Thank you for choosing our services. We are proud to offer the best entertainment experience through access tickets to the fun-filled carnival, refreshing water park, natural beauty at the zoo, and unforgettable sightseeing trips. Find fun and excitement with us in every ticket the one you choose! <br /> If you have a question you can send by email to <span className='font-semibold text-blue-500'>versatile@company.co.id</span> </p>
                    <div className=' mt-[310px]'>
                        <form action="#" method='POST'>
                            <label htmlFor="message">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    cols="50"
                                    className="w-[500px] h-[200px] mt-8 ml-12 rounded-xl p-2"
                                    placeholder="Give us your feedback"
                                >
                                </textarea>

                            </label>
                            <button type="submit" className='px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 ml-12 mt-2'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;

export function GallerySection2() {
    return (
        <div class="container ms-16 px-5 py-2 lg:px-32 lg:pt-24 mt-14">
            <div className="flex flex-row">
                <div className="w-[50%] ml-[-30px]">
                    <p className=' text-white text-lg'>Thank you for choosing our services. We are proud to offer the best entertainment experience through access tickets to the fun-filled carnival, refreshing water park, natural beauty at the zoo, and unforgettable sightseeing trips. Find fun and excitement with us in every ticket the one you choose! <br /> If you have a question you can send by email to <span className='font-semibold text-blue-500'>versatile@company.co.id</span> </p>
                </div>
                <div className="w-[50%] mx-auto mt-[-30px]">
                    <form action="#" method='POST'>
                        <label htmlFor="message">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                cols="50"
                                className="w-[500px] h-[200px] mt-8 ml-12 rounded-xl p-2 bg-gray-50"
                                placeholder="Give us your feedback"
                            >
                            </textarea>

                        </label>
                        <button type="submit" className='px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 ml-12 mt-2'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

