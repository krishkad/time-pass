import Navbar from '@/components/shared/Navbar'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <Navbar />
            <main className="w-full">{children}</main>
        </div>
    )
}

export default RootLayout