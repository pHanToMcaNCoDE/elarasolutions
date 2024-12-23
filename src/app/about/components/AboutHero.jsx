import Image from 'next/image'
import React from 'react'
import img from '../../../../public/assets/about-us/heroImg.svg';

const AboutHero = () => {
  return (
    <section className='w-full xl:h-full bg-white overflow-hidden flex justify-center items-center'>
        <div className='max-w-[1100px] mx-auto lg:pb-[70px] pt-[200px] gap-[80px] lg:gap-[60px] flex flex-col justify-center items-center'>
            <div className='w-[328px] md:w-[529px] lg:w-[829px] flex flex-col justify-center items-center gap-[24px] text-center'>
                <h1 className='text-blue leading-[50px] lg:leading-[75px] font-semibold text-[2.5rem] lg:text-[3.75rem]'>Empowering Businesses with Tomorrow&apos;s Technology</h1>
                <p className='text-blueTwo font-normal leading-[25.6px] lg:leading-[32px] text-[1rem] lg:text-[1.25rem]'>
                    From a small startup to a global IT leader, Elara has been delivering innovation since 2016. Combining expertise, innovation, and reliability to deliver results that matter.
                </p>
            </div>
            <div className='relative overflow-hidden'>
                <Image className='w-[427.68px] md:w-[990px] h-[247.77px] md:h-[573.55px] object-cover gap-[9.41px]' src={img} alt='Team'></Image>
                <div className='absolute w-full h-full bg-gray rounded-[16px]'></div>
            </div>
        </div>
    </section>
  )
}

export default AboutHero