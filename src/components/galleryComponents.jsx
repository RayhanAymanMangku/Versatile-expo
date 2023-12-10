import React from "react";
import { useState, Link, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";
import './galleryComponent.css'
import { BtnBooking } from "./BookingModal";

export function CategoryButtons() {
    const categories = ['All', 'Carnival', 'Waterboom', 'Tourist', 'Zoo'];

    return (
        <>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap mt-2" style={{ marginBottom: '-35px' }} id="kategori">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        type="button"
                        className="text-white bg-none transition-colors duration-300 rounded-full px-6 py-2 text-sm font-medium mr-4 mb-2 border border-white hover:bg-white hover:text-blue-gray-700"
                    >
                        {category}
                    </button>

                ))}
            </div>
            <hr className="w-[40%] mx-auto mt-6" />
        </>
    );
};

// card 
export function BookingCard({ title, desc, img, price }) {

    return (
        <Card className="w-full max-w-[26rem] shadow-lg mx-auto" id="card">
            <CardHeader floated={false} color="blue-gray">
                <img
                    src={img}
                    alt="ui/ux review check"
                    className="h-[150px] w-[100%]"
                />
            </CardHeader>

            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="white" className="font-medium">
                        {title}
                    </Typography>
                    <Typography
                        color="white"
                        className="flex items-center gap-1.5 font-normal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        5.0
                    </Typography>
                </div>
                <Typography color="white">
                    <div className=" text-justify" style={{ textJustify: 'inter-word', margin: '0 auto' }}>

                        {desc}
                    </div>
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <span className="cursor-pointer rounded-full border border-white bg-gray-900/5 p-3 text-white transition-colors hover:border-gray-900/10  hover:!opacity-100 group-hover:opacity-70">
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
                <div className="text-white mt-1">
                    Price: <span className="ml-2"></span> Rp. {price}
                </div>
            </CardBody>

            <CardFooter className="pt-3">
                <BtnBooking />
            </CardFooter>
        </Card>
    );
}

// isi card

export function GalleryComponent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('http://localhost/Database/Tiket.php')  // Sesuaikan dengan URL server dan endpoint
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error:', error));
    }, []);



    return (
        <>
            <div>
                <CategoryButtons />
                <div className="grid grid-cols-3 gap-4 md:p-28" id="cardDisplay">
                    {content.map((cardContent) => (
                        <BookingCard
                            key={cardContent.id}
                            title={cardContent.title}
                            desc={cardContent.desc}
                            img={cardContent.img}
                            price={cardContent.price}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
