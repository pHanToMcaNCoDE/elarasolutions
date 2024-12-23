'use client'

import Image from 'next/image'
import React from 'react'

import cloud from '../../public/assets/lending-services/icons/cloud.svg';
import data from '../../public/assets/lending-services/icons/data.svg';
import artificial from '../../public/assets/lending-services/icons/artificial.svg';
import mobile from '../../public/assets/lending-services/icons/mobile.svg';

import { usePathname } from 'next/navigation';

const TechnologyStack = () => {

    const pathname = usePathname();

  return (
    <section className='bg-white w-full min-h-screen py-[80px] md:py-[120px] px-[46px]'>
        <div className='gap-[56px] flex flex-col justify-center items-center max-w-[1320px] mx-auto'>
            <div className={pathname === '/about' ? `w-[328px] md:w-full flex flex-col justify-center items-center text-center gap-[12px]` : `w-[328px] md:w-full lg:w-[768px] flex flex-col justify-center items-center text-center gap-[12px]`}>
                <h2 className={pathname === '/about' ? `hidden` : `uppercase text-greenTwo text-[.75rem] leading-[12px] font-medium font-instrument`}>customers</h2>
                <h1 className={pathname === '/about' ? `w-full text-blue font-normal leading-[39.04px] md:leading-[77.13px] text-[2rem] md:text-[3rem] font-bevan` : `lg:w-[227px] md:w-full xl:w-[768px] text-blue font-normal leading-[39.04px] md:leading-[77.13px] text-[2rem] md:text-[3rem] font-bevan`}>Technology Stack</h1>
                <p className='w-[328px] md:w-[641px] text-blueTwo text-[.875rem] md:text-[1rem] leading-[18.2px] md:leading-[24px] font-normal font-instrument'>
                We leverage the latest technologies to develop our lending solutions, including:
                </p>
            </div>

            <div className={`w-full rounded-[16px] md:rounded-[24px] flex flex-col justify-center items-center ${pathname === '/about' ? ' lg:gap-[24px] xl:h-[800px]' : 'xl:h-[696px]'}`}>
                <div className={`w-full flex flex-col md:flex-row justify-center items-center ${pathname === '/about' ? 'h-full lg:gap-[24px]' : 'md:h-[348px]'}`}>
                    <div className={pathname === '/about' ? `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[380px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:py-[56px] lg:px-[36px] border border-blueFive bg-blue rounded-tr-[16px] rounded-tl-[16px] md:rounded-tl-[16px] md:rounded-tr-none lg:rounded-[24px]` : `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue rounded-tl-[16px] rounded-tr-[16px] md:rounded-tl-[24px] md:rounded-tr-[0px]`}>
                        <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={cloud} alt='Expertise'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Cloud Computing:</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                        Scalable and flexible cloud-based solutions that enhance accessibility and reduce infrastructure costs.
                        </p>
                    </div>
                    <div className={pathname === '/about' ? `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[380px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:py-[56px] lg:px-[36px] border border-blueFive bg-blue md:rounded-tr-[16px] lg:rounded-[24px]` : `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue md:rounded-tr-[24px]`}>
                        <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={data} alt='Client-Centric Approach'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Big Data Analytics:</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                        Utilising big data technologies for in-depth analysis and insights into borrower behaviour and market trends.
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row justify-center md:h-[348px] items-center w-full ${pathname === '/about' ? ' lg:gap-[24px] h-full' : 'md:h-[348px]'}`}>
                    <div className={pathname === '/about' ? `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[380px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:py-[56px] lg:px-[36px] border border-blueFive bg-blue md:rounded-bl-[16px] lg:rounded-[24px]` : `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue md:rounded-bl-[24px]`}>
                        <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>
                                <Image width={23.06} height={27.34} className='object-cover' src={artificial} alt='Result-Driven Solutions'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Artificial Intelligence</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                        Implementing AI-driven tools for risk assessment and customer service automation, enhancing efficiency and accuracy.    
                        </p>
                    </div>
                    <div className={pathname === '/about' ? `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[380px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:py-[56px] lg:px-[36px] border border-blueFive bg-blue rounded-br-[16px] rounded-bl-[16px] md:rounded-br-[16px] md:rounded-bl-none lg:rounded-[24px]` : `w-[328px] md:w-full lg:w-[660px] h-[320px] md:h-[348px] gap-[24px] lg:gap-[30px] flex flex-col justify-center items-start py-[40px] px-[16px] lg:p-[60px] border border-blueFive bg-blue rounded-bl-[16px] rounded-br-[16px] md:rounded-br-[24px] md:rounded-bl-[0px]`}>
                        <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center gap-[14px] w-full'>
                            <div className='bg-blueSix border border-blueFive gap-[10px] p-[20px] rounded-lg w-[70px] h-[70px] flex justify-center items-center'>   
                                <Image width={23.06} height={27.34} className='object-cover' src={mobile} alt='Collaborative Partnership'></Image>
                            </div>
                            <h2 className='font-instrument font-semibold leading-[30px] lg:leading-[36px] text-white text-[1.25rem] lg:text-[1.5rem]'>Mobile and Web Technologies</h2>
                        </div>
                        <p className='font-instrument font-normal leading-[22.4px] lg:leading-[32px] text-[.875rem] lg:text-[1.25rem] text-neutral-300'>
                        Developing responsive applications that provide seamless access to lending services across devices.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechnologyStack