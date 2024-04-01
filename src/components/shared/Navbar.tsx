import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { rootLinks } from '@/constant/index.c'

const Navbar = () => {
    return (
        <div className='max-w-wrapper h-16 flex items-center justify-between'>
            <div className="flex items-center gap-5">
                <h1 className="font-extrabold text-xl">Kkad <span className="text-primary">Meet</span></h1>
                <div className="hidden md:flex gap-2 items-center">
                    {rootLinks.map((item, i) => {
                        return <Link href={item.href} key={i}>
                            <Button variant={'ghost'} className='h-6'>{item.label}</Button>
                        </Link>
                    })}
                </div>
            </div>
            <div className="hidden md:flex items-center gap-2 md:gap-5">
                <Button variant={'ghost'} size={'sm'}>Sign In</Button>
                <Button variant={'ghost'} size={'sm'}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Navbar