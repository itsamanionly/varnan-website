import { Logo } from './logo'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='border-t border-b py-3 '>
            <div className="container mx-auto flex items-center justify-between  ">
                <Logo />
                <p>
                    Let's Talk: <Link href='mailto:'>email@gmail.com</Link>
                </p>
                <p>
                    Copyright © 2025 <span className='font-semibold'>varnan</span>
                </p>
            </div>
        </footer>
    )
}
