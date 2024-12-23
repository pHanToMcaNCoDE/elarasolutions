import React from 'react'
import obj from '../../public/obj.svg';
import Image from 'next/image';
import ads from '../../public/assets/app-dev-service/ads.svg';

const ServiceCustomHero = ({title, desc, heroImg}) => {
  return (
    <section className='relative w-full min-h-screen flex flex-col bg-blue justify-center items-center lg:h-[990px] pt-[100px] gap-[64px]'>
      <Image className='object-cover absolute z-[3px] top-0 left-0 h-full w-full' src={obj} alt='Background Vector'></Image>
      <div className='w-full min-h-screen flex flex-col bg-blue justify-center items-center lg:h-[960px] gap-[64px]'>
        <div className='relative z-10 xl:w-[831px] gap-[32px] flex flex-col justify-center items-center text-center'>
          <div className='gap-[16px] flex flex-col justify-center items-center text-center'>
            <p className='font-dmSans uppercase text-green leading-[20px] text-[.875rem] font-normal'>our services</p>
            <h1 className='leading-[67.2px] font-medium text-[3.5rem] text-white font-instrument'>{title}</h1>
          </div>
          <p className='text-white text-[1.125rem] leading-[25.2px] font-normal font-dmSans'>
            {desc}
          </p>
        </div>
        <Image className='relative z-10 w-[1200px] h-[500px] rounded-[24px] object-cover' src={heroImg} alt='Illustration Of An App Development Process'></Image>
      </div>
      
    </section>
  )
}

export default ServiceCustomHero