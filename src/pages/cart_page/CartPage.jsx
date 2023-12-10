import React from 'react'
import { CartNavbar } from '../../components/NavbarComponents'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
import './CartPage.css'
import { CardCart } from '../../components/HeadingComponents'

const CartPage = () => {
    return (
        <>
            <div className='cart'>
                <CartNavbar />
                <div className='body-cart'>
                    <div className='text-3xl text-white font-semibold ms-32 pt-6'>Your Order History</div>
                    <div className="flex w-[80%] h-[50%] rounded-xl mx-auto mt-4">
                        <CardCart />
                    </div>
                </div>
                <FooterWithSocialLinks />
            </div>
        </>

    )
}

export default CartPage