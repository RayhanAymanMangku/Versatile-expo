import React from 'react'
import { DetailProductComponent, ImgWithBlurredCaption } from '../../components/HeadingComponents'
import { CartNavbar } from '../../components/NavbarComponents'
import './DetailProduct.css'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
const Detail_Product = () => {
    return (
        <>
            <div className="detProduct">
                <CartNavbar />
                <DetailProductComponent />
                <FooterWithSocialLinks />
            </div>
        </>
    )
}

export default Detail_Product

