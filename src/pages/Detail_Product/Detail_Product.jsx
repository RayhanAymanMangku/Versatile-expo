import React, { useEffect, useState } from 'react'
import { DetailProductComponent, ImgWithBlurredCaption } from '../../components/HeadingComponents'
import { CartNavbar } from '../../components/NavbarComponents'
import './DetailProduct.css'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
import { useLocation } from 'react-router-dom'
const Detail_Product = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Accessing query parameters
    const title = searchParams.get('title');
    const desc = searchParams.get('desc');
    const img = searchParams.get('img');
    const price = searchParams.get('price');
    // useEffect(() => {

    // }, []);

    return (
        <>
            {console.log(title, desc, img, price)}
            <div className="detProduct">
                <CartNavbar />
                <DetailProductComponent title={title} desc={desc} img={img} price={price} />
                <FooterWithSocialLinks />
            </div>
        </>
    )
}

export default Detail_Product

