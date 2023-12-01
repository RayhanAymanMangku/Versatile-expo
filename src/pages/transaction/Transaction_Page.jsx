import React from 'react'
import { CartNavbar } from '../../components/NavbarComponents'
import { FooterWithSocialLinks } from '../../components/FooterComponents'
import { TransactionHeading } from '../../components/HeadingComponents'
import './transactionPage.css'

const Transaction_Page = () => {
    return (
        <>
            <div className='transaction'>
                <CartNavbar />
                <TransactionHeading />
                <FooterWithSocialLinks />
            </div>
        </>
    )
}

export default Transaction_Page