import React from 'react'
import { DashboardNavbar2 } from '../../components/NavbarComponents'
import { GalleryComponent } from '../../components/galleryComponents'
import '../../pages/Dashboard/DashboardPage.css'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
import { UseDarkMode } from '../../components/DarkModeContext'
const page = () => {
    const { isDarkMode } = UseDarkMode();



    return (
        <>
            <div className={`dp ${isDarkMode ? 'dark-mode' : ''}`}>
                <DashboardNavbar2 />
                <GalleryComponent />
                <FooterWithSocialLinks />
            </div>
        </>
    )
}

export default page