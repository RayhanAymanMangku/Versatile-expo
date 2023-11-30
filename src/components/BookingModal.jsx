import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(1px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    color: '#fff',

};

export function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        <div>
            <Button onClick={handleOpen} fullWidth={true}><div className='w-[100%] px-6 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300'>Booking Now</div></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Choose your ticket
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Choose your ticket type and number of pax
                    </Typography> */}
                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Please select the number of pax.
                    </p>
                    <form action="">
                        {/* <input type="number" className='py-1 px-1  rounded-full border border-gray-400 mr-2 mb-2 mt-1 text-white bg-transparent text-center' />
                        <label htmlFor="child" className='mr-2'>Child</label>
                        <input type="number" className='py-1 px-1  rounded-full border border-gray-400 mr-2 mb-2 mt-1 text-white bg-transparent text-center' />
                        <label htmlFor="adult">Adult</label> */}
                        {/* <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-white dark:text-white">
                            Choose quantity:
                        </label> */}
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
                                {/* <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg> */}
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
                    <div className='flex-row'>
                        <Button onClick={handleClose} className='hover:text-white'>Buy</Button>
                        <Button onClick={handleClose} className='hover:text-white'>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}