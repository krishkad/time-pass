import { products } from '@/constant/index.c'
import React from 'react'
import { HeroParallax } from './hero-parallax'

const Hero = () => {
    return (
        <div className='w-full'>
            <HeroParallax products={products} />
        </div>
    )
}

export default Hero