import React from 'react'
import { NavbarSimple } from '../../components/NavbarComponents'
import { LandingPageHeading } from '../../components/HeadingComponents'
import '../../pages/LandingPage/LandingPage.css'
const LandingPage = () => {
    return (
        <>
            <div className='lp'>
                <NavbarSimple />
                <LandingPageHeading />
            </div>
        </>
    )
}

export default LandingPage