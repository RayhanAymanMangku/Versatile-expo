import React from 'react'
import { DashboardNavbar2 } from '../../components/NavbarComponents'
import { GalleryComponent } from '../../components/galleryComponents'
import '../../pages/Dashboard/DashboardPage.css'
import { FooterWithSocialLinks } from '../../components/FooterComponents'

const page = () => {
    return (
        <>
            <div className='dp'>
                <DashboardNavbar2 />
                <GalleryComponent />
                <FooterWithSocialLinks />
            </div>
        </>
    )
}

export default page