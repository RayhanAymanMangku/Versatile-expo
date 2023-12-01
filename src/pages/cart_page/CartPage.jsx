import React from 'react'
import { CartNavbar } from '../../components/NavbarComponents'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
import './CartPage.css'
import PaymentForm from '../../components/BookingModal'

const CartPage = () => {
    return (
        <>
            <div className='cart'>
                <CartNavbar />
                <div className='body-cart'>
                    <div className='text-3xl text-white font-medium ms-32 pt-6'>Your Order</div>
                    <PaymentForm />
                </div>
                <FooterWithSocialLinks />
            </div>
        </>

    )
}

export default CartPage