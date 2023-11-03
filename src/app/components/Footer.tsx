import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import devImage from '@/assets/img/webDev.svg'
export const Footer = () => {
    return (
        <footer className="footer place-items-center md:place-items-start p-10 bg-base-200 text-base-content">
            <Link href='/'>
                <Image width={100} src={devImage} alt="Web Dev" />
                <p>محمد لطیفی<br />طراح وب</p>
            </Link>
            <div className=''>
                <span className="footer-title">خدمات</span>
                <a href='http://t.me/mmadstrong' className="link link-hover">طراحی</a>
                <a href='http://discord.com/users/569132348692496404' className="link link-hover">پیاده سازی</a>
            </div>
            <div>
                <span className="footer-title">شرکت</span>
                <Link href="/contact">ارتباط</Link>
                {/* <Link href="/shop">فروشگاه</Link> */}
                <Link href="/about">درباره</Link>
            </div>
        </footer>
    )
}

export default Footer
