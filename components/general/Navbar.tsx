import Link from 'next/link'
import React from 'react'
import Logo from '@/public/next.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-5'>
            <Link 
                href="/"
                className='flex items-center gap-2'
            >
                <Image src={Logo} alt="Logo Job Marshal" width={40} height={40} />
                <h1 className='text-2xl font-bold'>
                    Job<span className='text-primary'>Marshal</span>
                </h1>
            </Link>

            <div className='flex items-center gap-4'>
                <ThemeToggle />
                <Button className='cursor-pointer'>Login</Button>
            </div>
        </nav>
    )
}

export default Navbar