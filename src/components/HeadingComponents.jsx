import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function LandingPageHeading() {
    const inputStyle = {
        border: '1px solid #e5e7eb',
        padding: '8px',
        width: '100%',

    };



    return (

        <>
            <div className="flex col-2">
                <div>
                    <h1 className="text-left font-semibold text-white mt-36 ms-36 sm:text-3xl md:text-5xl" style={{ width: '520px' }}>Entertainment Right In Front of you. Book your tickets Now</h1>
                    <p className="text-left font-light text-gray-300 mt-7 ms-36" style={{ width: '500px' }}>Easy Booking, Guaranteed Entertainment.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-1 rounded-md duration-300 mt-5 ms-36">
                        <Link to='/dashboard' className='font-normal'>Get Started</Link>
                    </button>
                </div>
                <div className="ms-auto mr-14 md:mt-28 xl:mt-16 md:w-auto sm:w-96">
                    {/* <img src="https://cdn.dribbble.com/users/449035/screenshots/5612222/media/aea0ec2fd5ee4bef0b6b8254131394d9.gif" alt="" classnameName="mx-auto w-[460px] absolute top-40 right-3" /> */}
                    <img src="../../public/assets/mock.png" alt="" />
                </div>
            </div>
            {/* <section>
                <div classnameName="flex h-44 bg-gray-50 shadow-lg mx-auto mt-56 w-[90%]" id="SearchDescSection">
                    <div classnameName="flex col-span-3 mx-auto">
                        <div classnameName="flex flex-col justify-center w-64 p-8 ">
                            <img src="/assets/pin.png" alt="" classnameName="w-32" />
                        </div>
                        <div classnameName="flex flex-col justify-center w-64 p-8 " >
                            <label classnameName="text-blue-500 pl-2 pb-2">Search Ticket</label>
                            <input type="text" style={inputStyle} placeholder="e.g Seaworld Anchol" classnameName="rounded-md" />
                        </div>
                        <div classnameName="flex flex-col justify-center w-64 p-8 ">
                            <label classnameName="text-blue-500 pl-2 pb-2">Pax Number</label>
                            <input type="number" style={inputStyle} placeholder="0" classnameName="rounded-md" />
                        </div>
                        <div classnameName="flex flex-col justify-center w-64 p-8">
                            <label classnameName="text-white pl-2 pb-2">.</label>
                            <button type="submit" classnameName="rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300" style={{
                                border: '1px solid #e5e7eb',
                                padding: '8px',
                                width: '100%',
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                                INQUIRE NOW
                            </button>
                        </div>

                    </div>
                </div>

            </section> */}
        </>
    )
}




